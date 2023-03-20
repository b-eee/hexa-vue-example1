import axios from "axios";

const getItems = async (applicationId, datastoreId, page, perPage) => {
  const params = {
    page: page,
    per_page: perPage,
    use_display_id: true,
  };
  const result = await axios.post(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/search`,
    params
  );
  return result.data.items;
};

const getItem = async (applicationId, datastoreId, itemId) => {
  const result = await axios.get(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/details/${itemId}?format=map`
  );
  return result.data.field_values;
};

const newItem = async (applicationId, datastoreId, item) => {
  const params = {
    item: item,
  };
  await axios.post(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/new`,
    params
  );
};

const updateItem = async (applicationId, datastoreId, itemId, item, revNo) => {
  const params = {
    item: item,
    rev_no: Number(revNo),
  };
  await axios.post(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/edit/${itemId}`,
    params
  );
};

const deleteItem = async (applicationId, datastoreId, itemId) => {
  await axios.delete(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/delete/${itemId}`,
    { data: {} }
  );
};

const executeAction = async (
  applicationId,
  datastoreId,
  itemId,
  actionId,
  revNo
) => {
  const params = {
    rev_no: Number(revNo),
    use_display_id: true,
  };
  await axios.post(
    `${process.env.VUE_APP_HEXABAESE_API_URL}/applications/${applicationId}/datastores/${datastoreId}/items/action/${itemId}/${actionId}`,
    params
  );
};

export default {
  getItems: getItems,
  getItem: getItem,
  newItem: newItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  executeAction: executeAction,
};
