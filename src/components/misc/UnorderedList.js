import { View } from "react-native";
import { Text } from "react-native";
import globalStyles from "../../../style";
import { useSelector } from "react-redux";

const UnorderedList = ({ data, index }) => {
  const { theme } = useSelector((state) => state.ThemeSlice);
  const { mainText } = globalStyles();
  return (
    <Column style={{ marginLeft: 16, marginTop: 16 }}>
      <Row key={index} style={{ marginBottom: 8 }}>
        <Column
          style={{
            alignSelf: "flex-start",
            transform: [{ scale: 2.5 }],
          }}
        >
          <Text
            style={{
              fontSize: 8,
              marginRight: 8,
              marginTop: 2,
              color: theme?.contrastText,
            }}
          >
            {"\u2022"}
          </Text>
        </Column>
        <Column>
          <Text style={{ marginBottom: 8, color: theme?.contrastText }}>
            {data.header}
          </Text>
          <Text style={[mainText, { color: theme?.contrastText }]}>
            {data.text}
          </Text>
        </Column>
      </Row>
      {/* ))} */}
    </Column>
  );
};

const Column = ({ children, style }) => {
  return (
    <View style={[{ display: "flex", flexDirection: "column" }, style]}>
      {children}
    </View>
  );
};

const Row = ({ children, style }) => {
  return (
    <View style={[{ display: "flex", flexDirection: "row" }, style]}>
      {children}
    </View>
  );
};

export default UnorderedList;
