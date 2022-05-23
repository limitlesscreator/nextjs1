import React from "react";
import {Htag,Button} from "../components/";
export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag={'h1'}>Текст</Htag>
            <Button appearance={'primary'}>Кнопка</Button>
            <Button appearance={'ghost'}>Кнопка</Button>
        </div>
    );
}
