import { FC } from "react";
import { T_ContentTable } from ".";

const firstRowWidth = 7;
const rowClass = "w-full flex justify-between";
const cellClass =
    "flex overflow-hidden flex-none p-2 border-[1px] border-gray-200";

const ResourceTable: FC<T_ContentTable> = ({ tableHeader, content }) => {
    const cellWidth =
        100 / (tableHeader.length - 1) -
        firstRowWidth / (tableHeader.length - 1);

    return (
        <div className="w-full flex flex-col">
            <div className={rowClass}>
                {tableHeader.map((tableHead, index) => (
                    <div
                        key={tableHead}
                        className={cellClass}
                        style={{
                            width:
                                index === 0
                                    ? `${firstRowWidth}%`
                                    : `${cellWidth}%`,
                        }}
                    >
                        {tableHead}
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col flex-wrap">
                {content.map((contentItem, index) => (
                    <div key={index.toString()} className={rowClass}>
                        {contentItem.map((cell, index) => (
                            <div
                                key={`${index}-cell`}
                                className={cellClass}
                                style={{
                                    width:
                                        index === 0
                                            ? `${firstRowWidth}%`
                                            : `${cellWidth}%`,
                                }}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceTable;
