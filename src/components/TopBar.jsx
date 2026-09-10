import Icon from './Icon';
import { PHONE_DISPLAY } from '../data/content';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-in">
        <span className="topbar-item"><Icon name="shield" className="ic" /> Se recibe subsidio de salud</span>
        <div className="topbar-right">
          <a className="topbar-item" href="tel:+5493816717375"><Icon name="phone" className="ic" /> {PHONE_DISPLAY}</a>
        </div>
      </div>
    </div>
  );
}
