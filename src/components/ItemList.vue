<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    :sort-by.sync="sortBy"
    loading-text="読込中... しばらくお待ち下さい"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar class="elevation-1">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              アイテム追加
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span>{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedTitle" label="タイトル" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedAssignees" label="担当" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="editedCategory"
                      :items="categories"
                      item-text="name"
                      item-value="value"
                      label="カテゴリ"
                      return-object
                      single-line
                    >
                    </v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                      v-model="datepickerMenu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="deadlineFormatted"
                          label="期限"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="deadline"
                        no-title
                        @input="datepickerMenu = false"
                      />
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="close">
                キャンセル
              </v-btn>
              <v-btn color="primary" @click="save">
                {{ saveButtonTitle }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <Confirm ref="confirm" />
      </v-toolbar>
    </template>
    <template v-slot:[`item.${fields.STATUS}`]="{ item }">
      <v-menu v-model="item.statusMenu" transition="scale-transition" offset-x>
        <template v-slot:activator="{ on }">
          <v-chip :color="getStatusColor(item)" dark v-on="on">
            {{ getStatus(item) }}
          </v-chip>
        </template>
        <v-list>
          <v-list-item
            v-for="menu in getStatusMenu(item)"
            :key="menu.id"
            @click="executeAction(item, menu.id)"
          >
            <v-list-item-avatar>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-slot:[`item.${fields.DEADLINE}`]="{ item }">
      {{ getDeadline(item) }}
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex";
import Confirm from "@/components/shared/Confirm";
import hexabase from "@/services/hexabase";
import {
  DATASTORE_TITLE,
  FIELDS,
  OPTIONS,
  STATUS_ACTIONS,
} from "@/constants/datastore";
import { SEPARATOR } from "@/constants/date";
import fieldsHelper from "@/helpers/fields";
export default {
  name: "ItemList",
  components: {
    Confirm,
  },
  data() {
    return {
      title: DATASTORE_TITLE,
      loading: true,
      sortBy: "",
      headers: [
        { text: "タイトル", value: FIELDS.TITLE },
        { text: "担当", value: FIELDS.ASSIGNEES },
        { text: "カテゴリ", value: FIELDS.CATEGORY },
        { text: "ステータス", value: FIELDS.STATUS },
        { text: "期限", value: FIELDS.DEADLINE },
        { text: "操作", value: "actions", sortable: false },
      ],
      applicationId: process.env.VUE_APP_APPLICATION_ID,
      datastoreId: process.env.VUE_APP_DATASTORE_ID,
      defaultItem: {},
      categories: OPTIONS.CATEGORY,
      fields: FIELDS,
      items: [],
      dialog: false,
      datepickerMenu: false,
      editedIndex: -1,
      editedItem: {},
      deadline: "",
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "アイテム追加" : "アイテム編集";
    },
    saveButtonTitle() {
      return this.editedIndex === -1 ? "追加" : "更新";
    },
    deadlineFormatted() {
      return this.convertDateSeparator(
        this.deadline,
        SEPARATOR.HYPHEN,
        SEPARATOR.SLASH
      );
    },
    editedTitle: {
      get() {
        if (!this.editedItem[FIELDS.TITLE]) {
          return "";
        }
        return this.editedItem[FIELDS.TITLE];
      },
      set(val) {
        this.$set(this.editedItem, FIELDS.TITLE, val);
      },
    },
    editedAssignees: {
      get() {
        if (!this.editedItem[FIELDS.ASSIGNEES]) {
          return "";
        }
        return this.editedItem[FIELDS.ASSIGNEES];
      },
      set(val) {
        this.$set(this.editedItem, FIELDS.ASSIGNEES, val);
      },
    },
    editedCategory: {
      get() {
        const selectedValue = this.editedItem[FIELDS.CATEGORY];
        if (!selectedValue || selectedValue.length < 1) {
          return {};
        }
        const result = {
          name: fieldsHelper.getOptionNameByValue(
            OPTIONS.CATEGORY,
            selectedValue
          ),
          value: selectedValue,
        };
        return result;
      },
      set(val) {
        this.$set(this.editedItem, FIELDS.CATEGORY, val.value);
      },
    },
    editedDeadline: {
      get() {
        if (!this.editedItem[FIELDS.DEADLINE]) {
          return "";
        }
        return this.editedItem[FIELDS.DEADLINE];
      },
      set(val) {
        this.$set(this.editedItem, FIELDS.DEADLINE, val);
      },
    },
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.close();
      }
    },
  },
  methods: {
    ...mapActions("system", ["updateLoading"]),
    async initialize() {
      const currentSortBy = this.sortBy || "";
      this.sortBy = "";
      await this.getItems();
      this.sortBy = currentSortBy;
      this.loading = false;
    },
    convertDateSeparator(date, from, to) {
      if (!date) {
        return null;
      }

      const [year, month, day] = date.split(from);
      return `${year}${to}${month}${to}${day}`;
    },
    getDeadline(item) {
      if (!item[FIELDS.DEADLINE]) {
        return "";
      }

      const deadline = item[FIELDS.DEADLINE];
      return this.convertDateSeparator(
        deadline.substr(0, 10),
        SEPARATOR.HYPHEN,
        SEPARATOR.SLASH
      );
    },
    getStatusColor(item) {
      const status = item[FIELDS.STATUS];
      let color = "white";
      switch (status) {
        case "新規":
          color = "light-blue lighten-3";
          break;
        case "受付":
          color = "light-blue darken-1";
          break;
        case "作業中":
          color = "light-blue darken-4";
          break;
        case "確認":
          color = "cyan darken-1";
          break;
        case "完了":
          color = "cyan darken-4";
          break;
      }

      return color;
    },
    getStatus(item) {
      return item[FIELDS.STATUS];
    },
    resetEditedItem() {
      this.editedIndex = -1;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.deadline = "";
    },
    async getItems() {
      const page = 1;
      const perPage = 0; // no limit
      this.items = await hexabase.datastore.getItems(
        this.applicationId,
        this.datastoreId,
        page,
        perPage
      );
      this.items.forEach(item => {
        item.statusMenu = false;
      });
    },
    async editItem(item) {
      const itemDetails = await hexabase.datastore.getItem(
        this.applicationId,
        this.datastoreId,
        item.i_id
      );

      const editedItem = {};
      editedItem[FIELDS.TITLE] = itemDetails[FIELDS.TITLE].value;
      editedItem[FIELDS.ASSIGNEES] = itemDetails[FIELDS.ASSIGNEES].value;
      editedItem[FIELDS.CATEGORY] = itemDetails[FIELDS.CATEGORY].value;
      editedItem[FIELDS.DEADLINE] = itemDetails[FIELDS.DEADLINE].value;

      this.editedIndex = this.items.indexOf(item);
      this.editedItem = editedItem;
      if (editedItem[FIELDS.DEADLINE]) {
        this.deadline = new Date(editedItem[FIELDS.DEADLINE])
          .toISOString()
          .substr(0, 10);
      }
      this.dialog = true;
    },
    async deleteItem(item) {
      if (
        await this.$refs.confirm.open(
          "アイテム削除",
          "アイテムを削除しますか？",
          {
            color: "light-blue accent-4",
          }
        )
      ) {
        const itemId = item.i_id;
        this.updateLoading(true);
        await hexabase.datastore.deleteItem(
          this.applicationId,
          this.datastoreId,
          itemId
        );
        this.updateLoading(false);
        this.initialize();
      }
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.resetEditedItem();
      });
    },
    async save() {
      this.updateLoading(true);
      if (this.editedIndex > -1) {
        // アイテム更新
        const itemId = this.items[this.editedIndex].i_id;
        const revNo = this.items[this.editedIndex].rev_no;
        const item = this.buildEditedItem();
        await hexabase.datastore.updateItem(
          this.applicationId,
          this.datastoreId,
          itemId,
          item,
          revNo
        );
      } else {
        // アイテム追加
        const item = this.buildEditedItem();
        await hexabase.datastore.newItem(
          this.applicationId,
          this.datastoreId,
          item
        );
      }
      this.updateLoading(false);
      this.close();
      this.initialize();
    },
    buildEditedItem() {
      const item = {};
      if (this.deadline) {
        const deadline =
          new Date(this.deadline).toISOString().split(".")[0] + "Z";
        item[FIELDS.DEADLINE] = deadline;
      }
      item[FIELDS.TITLE] = this.editedItem[FIELDS.TITLE];
      item[FIELDS.ASSIGNEES] = this.editedItem[FIELDS.ASSIGNEES];
      item[FIELDS.CATEGORY] = this.editedItem[FIELDS.CATEGORY];

      return item;
    },
    getStatusMenu(item) {
      return STATUS_ACTIONS[item[FIELDS.STATUS]];
    },
    async executeAction(item, actionId) {
      this.updateLoading(true);
      await hexabase.datastore.executeAction(
        this.applicationId,
        this.datastoreId,
        item.i_id,
        actionId,
        item.rev_no
      );
      this.updateLoading(false);
      this.initialize();
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style scoped>
::v-deep .v-data-table-header {
  background-color: #cfd8dc;
}

::v-deep th {
  color: #000 !important;
}
</style>
