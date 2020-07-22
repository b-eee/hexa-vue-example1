export const DATASTORE_TITLE = "TODOサンプル";

export const FIELDS = {
  TITLE: "Fld-eAXmZhXn",
  ASSIGNEES: "Fld-d0g8UE7D",
  CATEGORY: "Fld-BLoaNKjo",
  STATUS: "Fld-xjKEyppI",
  DEADLINE: "Fld-NdC29Im0",
};

export const OPTIONS = {
  CATEGORY: [
    {
      name: "A",
      value: "5f09903b2d5b420007934932",
    },
    {
      name: "B",
      value: "5f09903b2d5b420007934931",
    },
    {
      name: "C",
      value: "5f09903b2d5b420007934930",
    },
  ],
};

export const STATUS_ACTIONS = {
  // prettier-ignore
  "新規": [
    {
      id: "5f0990367bd83e0006097559",
      name: "次のステータスに進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "受付": [
    {
      id: "5f0990367bd83e000609755e",
      name: "前のステータスに戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "5f0990367bd83e000609755d",
      name: "次のステータスに進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "作業中": [
    {
      id: "5f0990367bd83e0006097560",
      name: "前のステータスに戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "5f0990367bd83e000609755f",
      name: "次のステータスに進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "確認": [
    {
      id: "5f0990367bd83e000609755c",
      name: "前のステータスに戻す",
      icon: "mdi-arrow-left-box",
    },
    {
      id: "5f0990367bd83e000609755b",
      name: "次のステータスに進める",
      icon: "mdi-arrow-right-box",
    },
  ],
  // prettier-ignore
  "完了": [
    {
      id: "5f0990367bd83e000609755a",
      name: "前のステータスに戻す",
      icon: "mdi-arrow-left-box",
    },
  ]
};
