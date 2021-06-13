import React from "react";
import { StyleSheet, View } from "react-native";
import { Time } from "./icons/Time";
import { Battery } from "./icons/Battery";
import { MobileSignal } from "./icons/MobileSignal";
import { Wifi } from "./icons/Wifi";
import { HomeIndicator } from "./icons/HomeIndicator";
import { Box, CamaraNativeThemeProvider } from "../components";

interface IiPhoneView {
  children: React.ReactNode;
}

export const PhoneView = ({ children }: IiPhoneView) => {
  return (
    <CamaraNativeThemeProvider theme="dark">
      <Box style={styles.container} backgroundColor="mainBackground">
        {/* top nav bar */}
        <View style={styles.statusBar}>
          <View>
            <Time />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "20%",
              justifyContent: "space-around",
            }}>
            <MobileSignal />
            <Wifi />
            <Battery />
          </View>
        </View>

        {/* contents to render in-between */}
        <View style={styles.children}>{children}</View>

        {/* bottom nav bar */}
        <View style={{ paddingVertical: 16 }}>
          <HomeIndicator />
        </View>
      </Box>
    </CamaraNativeThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 780,
    width: 414,
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  statusBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    margin: 16,
  },
  children: {},
});
