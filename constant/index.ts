export interface Category {
  CategoryName: string;
  CategoryImage: string;
  ImgageDescription: string;
  TabCategories?: Category[];
}

export const CategoryNews: Category[] = [
  {
    CategoryName: "Bussiness",
    CategoryImage: "/Assets/CategoryImages/Bussiness.jpg",
    ImgageDescription:
      "Business: દેશભરમાં ઓનલાઈન આર્થિક ઠગાઈના રોજના 800થી પણ વધુ કેસ નોંધાય છે",
  },
  {
    CategoryName: "Writers",
    CategoryImage: "/Assets/CategoryImages/Krishn.jpg",
    ImgageDescription:
      "Opinion: મતિ અને ગતિ સત્યની હોય તો ભગવાન શ્રીકૃષ્ણ મદદ કરે જ",
  },
  {
    CategoryName: "Lifestyle",
    CategoryImage: "/Assets/CategoryImages/Lifestyle.jpg",
    ImgageDescription:
      "વરસાદની ઋતુમાં ઘરમાં ફેલાઈ શકે છે ઈલેક્ટ્રિક કરંટ, આ રીતે રાખો સાવધાની",
  },
  {
    CategoryName: "Supplements",
    CategoryImage: "/Assets/CategoryImages/Supplements.jpg",
    ImgageDescription: "હું ફાલતુ કોમેન્ટને ઈગ્નોર જ કરું છું : કિયારા",
  },
  {
    CategoryName: "Technology",
    CategoryImage: "/Assets/CategoryImages/Technology.jpg",
    ImgageDescription:
      "Common Charger Regulation: એક દેશ એક ચાર્જર !જાણો ભારતમાં ક્યારે થશે લાગુ?",
  },
  {
    CategoryName: "Food",
    CategoryImage: "/Assets/CategoryImages/Food.jpg",
    ImgageDescription:
      "jagannath rathyatra 2024: આ ભોગ વિના અધૂરી રહેશે રથયાત્રાની ઉજવણી, બનાવો ઘરે",
  },
  {
    CategoryName: "Travel",
    CategoryImage: "/Assets/CategoryImages/Travel.jpg",
    ImgageDescription:
      "Visa-Free Countries: આ દેશોમાં વિઝા વિના મળશે પ્રવેશ, ભારતીય પાસપોર્ટ હોવો જરૂરી",
  },
  {
    CategoryName: "Relationship",
    CategoryImage: "/Assets/CategoryImages/Relationship.jpg",
    ImgageDescription:
      "Mother's Day 2024: આ ગિફ્ટ્સનો કરો પ્લાન, મધર્સ ડે બની જશે ખાસ",
  },
];