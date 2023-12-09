import css from "./App.module.css"
import { Profile } from "./Profile/Profile";
import user from '../userdata/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../userdata/data.json'
import { Friends } from "./Friends/Friends";
import friends from "../userdata/friends.json";
import { Transactions } from "./Transactions/Transactions";
import items from '../userdata/transactions.json'

export const App = () => {
  return (
    <div className={css.appContainer}>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friendArr={friends} />
      <Transactions transactions={items} />
    </div>
  );
};
