import styles from './index.less';
import { a } from '../utils/a';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index {a}</h1>
    </div>
  );
}
