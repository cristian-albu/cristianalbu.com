import { tool } from "../../../../shared/constants";
import {
    T_Tool,
    ToolContents_Schema,
    Tool_Schema,
} from "../../../../shared/schemas";
import { T_TextInput } from "../components/text-input";
import useFetch from "../utils/useFetch";
import ResourceBuilder from "../components/resource-builder/ResourceBuilder";
import ResourceTable from "../components/content-table";
import useTableDataBuilder from "../utils/useTableDataBuilder";
import Modal from "../components/modal";
import {
    buildFormInputsFromItem,
    buildFormInputsFromSchema,
} from "../utils/buildFormInputs";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { tool_id, ...toolProps } = tool;

const formInputs: T_TextInput[] = buildFormInputsFromSchema(toolProps);

const Tools = () => {
    const { data, error, loading, refetch } = useFetch<T_Tool[]>("tools");

    const { tableHeader, tableContent } = useTableDataBuilder(data);

    const tableHeaderWithOptions = [...tableHeader, "Details"];
    const tableContentWithOptions = useMemo(() => {
        return data
            ? data.map((item, index) => {
                  const row = tableContent[index];
                  const formInputs = buildFormInputsFromItem(item);
                  return [
                      ...row,
                      <div>
                          <Modal target="Edit">
                              <ResourceBuilder
                                  formInputs={formInputs}
                                  refetch={refetch}
                                  schema={Tool_Schema}
                                  reqMethod="PUT"
                                  apiUri={`tools/${formInputs[0].label}`}
                                  formTitle="Edit Tools"
                              />
                          </Modal>
                      </div>,
                  ];
              })
            : [];
    }, [data, tableContent, refetch]);

    return (
        <div className="p-10">
            <h1 className="text-4xl mb-5">Tools</h1>
            {data === null || loading ? (
                <div>Loading...</div>
            ) : (
                <ResourceTable
                    tableHeader={tableHeaderWithOptions}
                    content={tableContentWithOptions}
                />
            )}
            {error !== null && <div>Error</div>}

            <Modal target="Add tool">
                <ResourceBuilder
                    formInputs={formInputs}
                    refetch={refetch}
                    schema={ToolContents_Schema}
                    reqMethod="POST"
                    apiUri={`tools`}
                    formTitle="Add Tools"
                />
            </Modal>
        </div>
    );
};

export default Tools;
