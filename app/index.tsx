import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BCACloneApp() {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>BCA mobile</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.navIcon}>
            <Icon name="qr-code-outline" size={24} color="#00cc44" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}>
            <Icon name="menu-outline" size={24} color="#00cc44" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Pesan Selamat Datang */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Selamat datang,</Text>
          <Text style={styles.userName}>KORNELIS YUDHA SATRIA</Text>
        </View>

        {/* Banner Component */}
        <Banner />

        {/* Grid Ikon */}
        <View style={styles.iconGrid}>
          {[
            { title: "m-Info", icon: "📄" },
            { title: "m-Transfer", icon: "🔄" },
            { title: "m-Payment", icon: "💸" },
            { title: "m-Commerce", icon: "🛒" },
            { title: "Cardless", icon: "📱" },
            { title: "m-Admin", icon: "⚙️" },
            { title: "BCA Keyboard", icon: "⌨️" },
            { title: "Flazz", icon: "💳" },
            { title: "BagiBagi", icon: "🎁" },
            { title: "Lifestyle", icon: "🛍️" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.iconButton}>
              <View style={styles.iconBackground}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text style={styles.iconLabel}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <FooterButton title="Home" iconName="home-outline" highlight={undefined} style={undefined} />
        <FooterButton title="Transaksi" iconName="repeat-outline" highlight={undefined} style={undefined} />
        <FooterButton title="QRIS" iconName="qr-code-outline" highlight style={styles.qrisButton} />
        <FooterButton title="Notifikasi" iconName="notifications-outline" highlight={undefined} style={undefined} />
        <FooterButton title="Akun Saya" iconName="person-outline" highlight={undefined} style={undefined} />
      </View>
    </View>
  );
}

const FooterButton = ({ title = "", iconName="", highlight= false , style= {}}) => (
  <TouchableOpacity style={[styles.footerButtonContainer, style]}>
    <Icon name={iconName} size={20} color={highlight ? "#ffffff" : "#808080"} />
    <Text style={[styles.footerButton, highlight && styles.highlightButton]}>{title}</Text>
  </TouchableOpacity>
);

const Banner = () => (
  <TouchableOpacity style={styles.banner}>
    <Text style={styles.bannerText}>Cek & Menangkan</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002f6e",
    alignItems: "center",
    paddingTop: 20,
  },
  navBar: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#002f6e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff33",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  navTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  navIcons: {
    flexDirection: "row",
  },
  navIcon: {
    marginHorizontal: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60, // Menyediakan ruang untuk footer
  },
  welcomeContainer: {
    width: "100%", // Mengatur lebar menjadi 90% dari layar
    alignItems: "flex-start", // Mengatur teks rata kiri
    paddingVertical: 10,
    paddingHorizontal: 20, // Menambahkan padding horizontal
    backgroundColor: "#002f6e",
},
  welcomeText: {
    fontSize: 14,
    color: "white",
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  banner: {
    backgroundColor: "#0066cc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10, // Memberikan jarak vertikal antara welcomeContainer dan Banner
    alignSelf: "center", // Mengatur banner agar berada di tengah
  },
  bannerText: {
    color: "white",
    fontWeight: "bold",
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconButton: {
    width: "30%", // Mengatur lebar untuk tiga ikon per baris
    alignItems: "center",
    marginVertical: 10,
  },
  iconBackground: {
    backgroundColor: "#00509e",
    width: 65, // Ukuran ikon yang lebih besar
    height: 65,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  icon: {
    fontSize: 32, // Ukuran font yang lebih besar untuk ikon
    color: "white",
  },
  iconLabel: {
    color: "white",
    fontSize: 14, // Ukuran font yang lebih besar untuk label
    marginTop: 6,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
    width: "100%",
    paddingVertical: 5,
    position: "absolute",
    bottom: 0,
  },
  footerButtonContainer: {
    alignItems: "center",
  },
  footerButton: {
    color: "#808080",
    fontSize: 12,
  },
  highlightButton: {
    color: "#002f6e",
    fontWeight: "bold",
  },
  qrisButton: {
    backgroundColor: "#0066cc", // Latar belakang untuk QRIS
    borderRadius: 15,           // Mengatur radius sudut
    paddingVertical: 5,        // Meningkatkan tinggi dengan padding vertikal
    paddingHorizontal: 10,      // Meningkatkan padding horizontal untuk keseimbangan
    marginBottom: 5,            // Menambahkan margin bawah jika diperlukan untuk ruang
  },
});
