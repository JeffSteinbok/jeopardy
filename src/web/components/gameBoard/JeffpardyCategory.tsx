import * as React from "react";
import { ICategory } from "../../JeffpardyHostController";
import { Logger } from "../../utilities/Logger";
import { IJeffpardyBoard } from "./JeffpardyBoard";

export interface IJeffpardyCategoryState {
}

export interface IJeffpardyCategoryProps {
    jeffpardyBoard: IJeffpardyBoard;
    category: ICategory
}


export class JeffpardyCategory extends React.Component<IJeffpardyCategoryProps, IJeffpardyCategoryState> {

    private contextMenuTarget: any;

    constructor(props: IJeffpardyCategoryProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                { !this.props.category.isAsked &&
                    this.props.category.title }
            </div>
        );
    }
}
