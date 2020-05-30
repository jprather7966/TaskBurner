import React from "react";
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222333",
  },
  totalView: {
    backgroundColor: "#222333",
  },
  content: { padding: 40 },
  text: { fontSize: 16 },
  item: {
    alignSelf: "stretch",
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: { fontSize: 16, color: "#fff" },
});

export default Styles;
