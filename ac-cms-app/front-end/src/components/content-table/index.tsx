import { ReactNode } from "react";
import ResourceTable from "./ContentTable";

export type T_ContentTable = {
    tableHeader: string[];
    content: ReactNode[][];
};

export default ResourceTable;
