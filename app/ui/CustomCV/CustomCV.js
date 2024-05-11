import CV from 'react-cv';
import {agnieszkaSierbista} from "../../lib/agnieszka-sierbista";
import style from './style.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(style);
const CN = 'custom-cv';

export const CustomCV = () => {
    return (
        <div className={cx(CN)}>
            <CV
                className={cx(CN)}
                {...agnieszkaSierbista}
            />
        </div>
    )
}