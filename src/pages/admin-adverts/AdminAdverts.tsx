import { Dropdown, MenuProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styles from "./admin-adverts.module.scss";
function AdminAdverts() {
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
    <div className={styles.advert}>
      <header>
        <NavLink to="/admin/adverts/add" className={styles.add}>
          + News
        </NavLink>
      </header>
      <main>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <NavLink to="/admin/adverts/1" className={styles.name}>
              1-й Лечебный
            </NavLink>

            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className={styles.more} />
            </Dropdown>
          </div>
          <div className={styles.card}>
            <NavLink to="/admin/adverts/2" className={styles.name}>
              2-й Лечебный
            </NavLink>

            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className={styles.more} />
            </Dropdown>
          </div>
          <div className={styles.card}>
            <NavLink to="/admin/adverts/3" className={styles.name}>
              3-й Лечебный
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

export default AdminAdverts;
