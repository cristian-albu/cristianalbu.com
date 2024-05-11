import { useMemo } from "react";
import { z } from "zod";

const useTableDataBuilder = (
    data: Record<string, string | number>[] | null
) => {
    const { tableHeader, tableContent } = useMemo(() => {
        if (!data) {
            return { tableHeader: [], tableContent: [] };
        }
        const tableHeader = Object.keys(data[0]);
        const tableContent = data.map((row) =>
            Object.entries(row).map(([key, val]) => {
                if (
                    key === "image" &&
                    typeof val === "string" &&
                    z.string().url().safeParse(val).success
                ) {
                    return (
                        <img
                            src={val}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "/vite.svg";
                            }}
                            className="w-[1.5rem] aspect-square object-contain"
                        />
                    );
                } else {
                    return <p>{val}</p>;
                }
            })
        );

        return {
            tableHeader,
            tableContent,
        };
    }, [data]);
    return { tableHeader, tableContent };
};

export default useTableDataBuilder;
