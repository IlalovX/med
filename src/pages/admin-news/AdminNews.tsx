import { NavLink } from "react-router-dom";
import styles from "./admin-news.module.scss";
import { Dropdown, MenuProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
function AdminNews() {
  const items: MenuProps["items"] = [
    {
      label: "Edit",
      key: "0",
      onClick: () => {
        console.log(false);
      },
    },
    {
      label: "Delete",
      key: "1",
      onClick: () => {
        console.log(true);
      },
    },
  ];
  return (
    <div className={styles.news}>
      <header>
        <NavLink to="/admin/news/add" className={styles.add}>
          + News
        </NavLink>
      </header>
      <main>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <NavLink to="/admin/news/1" className={styles.name}>
              News 1
            </NavLink>

            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className={styles.more} />
            </Dropdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminNews;
