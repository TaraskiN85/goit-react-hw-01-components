import css from "./App.module.css"
import { Profile } from "./Profile/Profile";
import user from '../userdata/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../userdata/data.json'
import { FriendList} from "./Friends/FriendList";
import friends from "../userdata/friends.json";
import { Transactions } from "./Transactions/Transactions";
import items from '../userdata/transactions.json'

export const App = () => {
  const { username, location, avatar, stats, tag } = user;
  return (
    <div className={css.appContainer}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendArr={friends} />
      <Transactions transactions={items} />
    </div>
  );
};
