import "./App.css";

export const generateColumns = (value) => {
  const { t } = value;

  let columns = [
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <img alt={image} src={image} className="table-image-antd" />
      ),
    },
    {
      title: "Favorite",
      dataIndex: "favorite",
      render: (favorite) => (favorite ? t("Yes") : t("No")),
    },
  ];
  columns = columns.map((el) => ({ ...el, title: t(el.title) }));
  return columns;
};
export const generateColumnsUsers = (value) => {
  const { t } = value;

  let columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "UserName",
      dataIndex: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirection: ["descend", "ascend"],
    },
    {
      title: "Favorite",
      dataIndex: "favorite",
      render: (favorite) => (favorite ? t("Yes") : t("No")),
    },
  ];
  columns = columns.map((el) => ({ ...el, title: t(el.title) }));
  return columns;
};

export const radioButton = ["Yes", "No", "Reset"];

export const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];
