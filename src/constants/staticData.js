import Dining from "../../assets/icons/dining.png";
import Travelling from "../../assets/icons/travelling.png";
import Shopping from "../../assets/icons/shopping.png";
import Entertainment from "../../assets/icons/entertainment.png";
import Bills from "../../assets/icons/bills.png";
import Hotel from "../../assets/icons/hotel.png";
import { Icon } from "react-native-elements";

export const homeIconBtnData = [
  {
    id: 1,
    image: Dining,
    text: "Dining",
  },
  {
    id: 2,
    image: Travelling,
    text: "Travelling",
  },
  {
    id: 3,
    image: Shopping,
    text: "Shopping",
  },
  {
    id: 4,
    image: Entertainment,
    text: "Entertainment",
  },
  {
    id: 5,
    image: Bills,
    text: "Utility Bills",
  },
  {
    id: 6,
    image: Hotel,
    text: "Hotels",
  },
  {
    id: 7,
    image: null,
    text: "And many more!",
  },
];

export const navLinkData = [
  {
    id: 1,
    label: "Home",
    link: "Home",
  },
  {
    id: 2,
    label: "About Us",
    link: "AboutUs",
  },
  {
    id: 3,
    label: "Contact Us",
    link: "ContactUs",
  },
  {
    id: 4,
    label: "Product Overview",
    link: "ProductOverview",
  },
  {
    id: 5,
    label: "FAQ",
    link: "FAQ",
  },
];

export const contactusData = [
  {
    id: 1,
    image: <Icon name="place" color="#55a1eb" />,
    text: "Room 1406, 14/F, solo Building, 41 - 43 Carnarvon Road, Tsim Sha Tsui, Hong Kong",
  },
  {
    id: 2,
    image: <Icon name="mail" color="#55a1eb" />,
    text: "support@kimlcards.com",
  },
  {
    id: 3,
    image: <Icon name="phone" color="#55a1eb" />,
    text: "+852 8193 2546",
  },
  {
    id: 4,
    image: <Icon name="whatsapp" color="#55a1eb" type="font-awesome" />,
    text: "+972 58 429 1288",
  },
];

export const productOverView = [
  {
    id: 1,
    title: "1. Real-Time Stablecoin Payments",
    content: [
      {
        header: "Spend Crypto Anywhere",
        text: "Use your Kiml Card wherever credit cards are accepted, online or in-store.",
      },
      {
        header: "Instant Conversion",
        text: "Your stablecoins automatically convert to fiat at checkout—no manual exchanges or extra steps.",
      },
    ],
  },
  {
    id: 2,
    title: "2. Virtual & Physical Cards",
    content: [
      {
        header: "Virtual Card",
        text: "Perfect for immediate online purchases. No waiting—use it right after sign-up.",
      },
      {
        header: "Physical Card",
        text: "For those who prefer a tangible card. Enjoy the convenience of contactless payments and global acceptance.",
      },
    ],
  },
  {
    id: 3,
    title: "3. Google Pay & Apple Pay Integration",
    content: [
      {
        header: "Tap & Go",
        text: "Link your Kiml Card with Google Pay or Apple Pay for seamless, on-the-go transactions.",
      },
      {
        header: "Secure Payments",
        text: "Benefit from built-in security features and biometric verification on your smartphone.",
      },
    ],
  },
  {
    id: 4,
    title: "4. Simple Sign-Up & KYC",
    content: [
      {
        header: "Fast Registration",
        text: "Open an account in minutes with a quick KYC process.",
      },
      {
        header: "Transparent Verification",
        text: "Industry-leading ID and biometric checks keep your account secure and compliant.",
      },
    ],
  },
  {
    id: 5,
    title: "5. Referral Rewards",
    content: [
      {
        header: "Earn Up to 3%",
        text: "Invite friends and family to join KimlCards and get rewarded.",
      },
      {
        header: "Easy Tracking",
        text: "Monitor referral progress and earnings through our transparent system.",
      },
    ],
  },
  {
    id: 6,
    title: "6. Advanced Security & Compliance",
    content: [
      {
        header: "Regulatory Confidence",
        text: "Compliant with AML and KYC regulations to protect your assets.",
      },
      {
        header: "Fraud Protection",
        text: "Cutting-edge tools to prevent unauthorized activity, giving you peace of mind.",
      },
    ],
  },
];
