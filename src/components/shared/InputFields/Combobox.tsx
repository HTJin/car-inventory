import React, { forwardRef, useState } from "react";
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
    const { name, placeholder, items = [], selectedItem, onChange, className } =
      props;
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
        onChange={(value) => {
          console.log("Combobox onChange:", value);
          onChange(value);
        }}
        className={className}
      >
        <HeadlessCombobox.Label className="text-azure block text-sm font-medium leading-6">
          {placeholder}
        </HeadlessCombobox.Label>
        <div className="relative mt-2">
          <HeadlessCombobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ref={ref}
            onChange={(event) => setQuery(event.target.value)}
            value={selectedItem ? selectedItem.name : ""}
          />
          <HeadlessCombobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <HeadlessCombobox.Option
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none py-2 pl-8 pr-4",
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
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
