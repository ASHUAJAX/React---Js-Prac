import { error } from "console";
import { accessSync } from "fs";
import React, { useEffect, useMemo, useState } from "react";

function DynamicForm() {
  const formProperties = {
    configs: {
      type: "object",
      properties: {
        clientId: {
          type: "string",
          title: "Client Id",
          description: "Client Id shared by JioPay toStatusResponse merchant",
        },
        clientSecret: {
          type: "string",
          title: "Client Secret",
          description:
            "Client Secret shared by JioPay toStatusResponse merchant",
          minLength: 5,
        },
        pspMid: {
          type: "string",
          title: "Merchant Id",
          description: "Merchant Id shared by JioPay toStatusResponse merchant",
          minLength: 1,
        },
      },
    },
  };

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const finalisedData = Object.entries(formProperties.configs.properties).map(
      ([key, value]) => {
        return {
          name: key,
          error: null,
          value: "",
          placeholder: "please enter " + value.title,
          ...value,
        };
      }
    );

    setData(finalisedData);
  }, []);

  const onChangeFunc = (ev: any): void => {
    const { name, value } = ev.target;

    setData((prev) =>
      prev.map((elm) =>
        name === elm.name
          ? {
              ...elm,
              value,
              error:
                value.length < elm.minLength
                  ? `${elm.title} should be ${elm.minLength} digits long`
                  : "",
            }
          : elm
      )
    );
  };

  const onBlurFunc = (ev: any): void => {
    const { name, value } = ev.target;

    setData((prev) =>
      prev.map((elm) =>
        name === elm.name
          ? {
              ...elm,
              value,
              error:
                value.length < elm.minLength
                  ? `${elm.title} should be ${elm.minLength} digits long`
                  : "",
            }
          : elm
      )
    );
  };

  let isValidForm: any = useMemo(() => {
    return data.every((elm) => elm.error === "");
  }, [data]);

  const submitFunc = () => {
    let result = data.reduce((acc, elm) => {
      const { name, value } = elm;
      if (!acc[name]) {
        acc[name] = value;
      }
      return acc;
    }, {});
    console.log(result);
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        isValidForm && submitFunc();
      }}
    >
      {data.map((elm, index) => (
        <div key={index}>
          <label htmlFor={elm.name}>{elm.title}</label>
          <br />
          <input
            type="text"
            name={elm.name}
            placeholder={elm.description}
            value={elm.value}
            onChange={onChangeFunc}
            onBlur={onBlurFunc}
          />
          {elm.error && <p style={{ color: "red" }}>{elm.error}</p>}
        </div>
      ))}
      <br />
      <button disabled={!isValidForm} type="submit">
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
