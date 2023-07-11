import css from './friend-list.module.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) =>{
return <ul className={css['friend-list']}>
    {friends.map(({avatar, name, isOnline, id})=>
    <li key={id}>
        <span className={isOnline ? css.isOnline : css.isOffline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    )}
 
</ul>
}


FriendList.propTypes = {
    friends: PropTypes.array.isRequired
  }

export default FriendList