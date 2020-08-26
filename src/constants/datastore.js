export const DATASTORE_TITLE = "TODOサンプル";

export const FIELDS = {
  TITLE: "Title",
  ASSIGNEES: "Assignee",
  CATEGORY: "Category",
  STATUS: "Status",
  DUEDATE: "DueDate",
};

export const OPTIONS = {
  CATEGORY: [
    {
      name: "A",
      value: "categoryA",
    },
    {
      name: "B",
      value: "categoryB",
    },
    {
      name: "C",
      value: "categoryC",
    },
  ],
};

export const STATUS_ACTIONS = {
  // prettier-ignore
  "新規": [
    {
      id: "MoveToAssigned",
      name: "受け付ける",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "受付": [
    {
      id: "BackToNew",
      name: "新規へ戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "MoveToInProgress",
      name: "作業中へ進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "作業中": [
    {
      id: "MoveToAssigned",
      name: "受付へ戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "MoveToInReview",
      name: "確認へ進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "確認": [
    {
      id: "BackToInProgress",
      name: "作業中へ戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "MoveToClosed",
      name: "完了する",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "完了": [
    {
      id: "BackToInReview",
      name: "確認へ戻す",
      icon: "mdi-arrow-left-box",
    },
  ]
};
