import styles from "./admin-users.module.scss";
import { Dropdown, Input, MenuProps, Select } from "antd";
import {
  MailOutlined,
  MoreOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function AdminUsers() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
    <div className={styles.users}>
      <header>
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Search here..."
          className={styles.input}
        />
        <div className={styles.header_container}>
          <Select
            defaultValue="newest"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "newest", label: "Newest" },
              { value: "lastest", label: "Lastest" },
            ]}
          />
          <NavLink to="/admin/users/add" className={styles.add}>
            + Teachers
          </NavLink>
        </div>
      </header>
      <main>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <NavLink to="/admin/users/1" className={styles.name}>
              Dimitres Viga
            </NavLink>
            <span className={styles.prof}>Mathematics</span>
            <div className={styles.btns_container}>
              <button>
                <PhoneOutlined />
              </button>
              <button>
                <MailOutlined />
              </button>
            </div>
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

export default AdminUsers;
