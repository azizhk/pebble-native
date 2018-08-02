import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { OptionsProps } from "./typings/Options";
import colors from "../theme/colors";

const styles = StyleSheet.create({
  optionWrapper: {
    backgroundColor: colors.white.base
  },
  row: {
    paddingHorizontal: 30,
    paddingVertical: 25
  }
});

export default function Options(props: OptionsProps) {
  const {
    options,
    keyExtractor,
    rowRenderElement,
    dropdownStyle,
    width
  } = props;

  return (
    <View
      style={[
        styles.optionWrapper,
        dropdownStyle,
        {
          width
        }
      ]}
    >
      {options.map((option, i) => {
        const key = keyExtractor(option);

        return (
          <TouchableNativeFeedback
            key={key}
            onPress={() => props.onSelect(option)}
          >
            <View style={styles.row}>
              {rowRenderElement(
                option,
                i,
                props.selected === keyExtractor(option)
              )}
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
}
