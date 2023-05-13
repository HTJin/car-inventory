import React, { forwardRef, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox as HeadlessCombobox } from "@headlessui/react";

interface Item {
  id: number;
  name: string;
}

interface ComboboxProps {
  name: string;
  placeholder: string;
  items: Item[];
  selectedItem: Item | null;
  onChange: (value: any) => void;
  className?: string;
}

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (props, ref) => {
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");
    const {
      name,
      placeholder,
      items = [],
      selectedItem,
      onChange,
      className,
    } = props;
    const filteredItems =
      query === ""
        ? items
        : items.filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
          });

    function classNames(...classes: (string | boolean)[]) {
      return classes.filter((value) => Boolean(value)).join(" ");
    }

    return (
      <HeadlessCombobox
        as="div"
        value={selectedItem}
        onChange={(value: any) => {
          setInputValue(value.name);
          onChange(value);
        }}
        className={className}
        placeholder={placeholder}
      >
        <HeadlessCombobox.Label className="text-var(--text-color) -ml-3 text-sm font-medium">
          {name === "vehicle_type"
            ? "Body Type:"
            : name.charAt(0).toUpperCase() + name.slice(1) + ":"}
        </HeadlessCombobox.Label>
        <div className="relative flex flex-col items-center">
          <HeadlessCombobox.Input
            className="hover:-ring-offset-1 w-full rounded-md border-0 bg-slate-800 py-1.5 pl-4 text-[var(--text-color)] shadow-sm ring-1 ring-inset ring-violet-500 hover:ring-1 hover:ring-[var(--hover-color)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ref={ref}
            onChange={(event) => {
              setQuery(event.target.value);
              setInputValue(event.target.value);
            }}
            value={inputValue}
          />
          <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="-mr-6 h-5 w-5 rounded-md py-1 text-sky-500 duration-200 hover:outline hover:outline-1 hover:outline-[var(--hover-color)]"
              aria-hidden="true"
            />
          </HeadlessCombobox.Button>
          <HeadlessCombobox.Options className="absolute z-10 mt-10 max-h-[15.5em] w-fit overflow-auto rounded-md bg-[var(--text-color)] text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <HeadlessCombobox.Option
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    classNames(
                      "relative mx-auto cursor-default select-none px-4 py-2",
                      active
                        ? "bg-indigo-600 text-[var(--text-color)]"
                        : "text-gray-900"
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames(
                          "block truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </HeadlessCombobox.Option>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">Loading...</div>
            )}
          </HeadlessCombobox.Options>
        </div>
      </HeadlessCombobox>
    );
  }
);
