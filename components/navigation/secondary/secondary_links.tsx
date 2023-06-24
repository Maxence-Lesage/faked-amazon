import style from "./secondary_links.module.scss";

interface Props {
    text: string;
}

export default function SecondaryLinks({ text }: Props) {
    return (
        <div className={style.secondary_links}>
            <p className={style.text}>{text}</p>
        </div>
    );
}