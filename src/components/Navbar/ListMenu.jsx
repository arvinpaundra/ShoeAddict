import cx from 'classnames';
import { Link } from 'react-router-dom';

const ListMenu = (props) => {
  const { active, menu, href } = props;

  const classMenu = cx({
    'font-normal text-sm hover:text-orange-500 hover:underline hover:underline-offset-4': true,
    active: active,
  });

  return (
    <>
      <Link to={href} className={classMenu}>
        {menu}
      </Link>
    </>
  );
};

export default ListMenu;
