import React, { useState } from "react";
import { StyleSheet, View, Switch, ImageBackground } from "react-native";
import { Time, Battery, HomeIndicator, MobileSignal, Wifi } from "./icons";
import { Box } from "../Box";
import { CamaraNativeThemeProvider } from "../CamaraNativeTheme";
import { Text } from "../Text";

interface IiPhoneView {
  children: React.ReactNode;
}

export const PhoneView = ({ children }: IiPhoneView) => {
  const [THEME, setTHEME] = useState<"light" | "dark">("light");
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [orientationEnabled, setOrientationEnabled] = useState(false);

  const toggleSwitch = () => {
    setDarkEnabled((previousState) => !previousState);
    THEME === "light" ? setTHEME("dark") : setTHEME("light");
  };

  const toggleOrientation = () => {
    setOrientationEnabled((previousState) => !previousState);
  };

  const lightBackground =
    "https://res.cloudinary.com/beaniegram/image/upload/c_scale,h_1126,w_1067/v1623835298/Personal%20Site/macOS-Big-Sur-Vector-Wave-Wallpaper-iDownloadBlog_gfmhsj.jpg";

  const darkBackground =
    "https://res.cloudinary.com/beaniegram/image/upload/c_scale,h_1000,w_1000/v1623835103/Personal%20Site/macOS-Big-Sur-Vector-Wave-Dark-Wallpaper-iDownloadBlog_lauxpt.jpg";

  return (
    <CamaraNativeThemeProvider theme={THEME}>
      <Box bg={"wrapperBg"}>
        <ImageBackground
          style={styles.image}
          source={{ uri: darkEnabled ? darkBackground : lightBackground }}>
          <Box style={styles.wrapper}>
            <Box
              padding="s"
              width="100%"
              flexDirection="row"
              justifyContent="flex-end">
              <Box paddingHorizontal="m" flexDirection="row">
                <Text marginRight="s">Dark Mode</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={darkEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={darkEnabled}
                />
              </Box>
              <Box paddingHorizontal="m" flexDirection="row">
                <Text marginRight="s">Landscape</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={orientationEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleOrientation}
                  value={orientationEnabled}
                />
              </Box>
            </Box>
            <Box
              style={styles.container}
              width={orientationEnabled ? 720 : 375}
              height={orientationEnabled ? 345 : 700}
              backgroundColor="mainBackground"
              borderColor="phoneViewBorder">
              {/* top nav bar */}
              <View style={styles.statusBar}>
                <View>
                  <Time theme={THEME} />
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: orientationEnabled ? "10%" : "20%",
                    justifyContent: "space-around",
                  }}>
                  <MobileSignal theme={THEME} />
                  <Wifi theme={THEME} />
                  <Battery theme={THEME} />
                </View>
              </View>

              {/* contents to render in-between */}
              <View style={styles.children}>{children}</View>

              {/* bottom nav bar */}
              <View style={{ paddingVertical: 16 }}>
                <HomeIndicator theme={THEME} />
              </View>
            </Box>
          </Box>
        </ImageBackground>
      </Box>
    </CamaraNativeThemeProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: "100%",
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 2,
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
