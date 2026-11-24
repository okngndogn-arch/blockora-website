// Tum site metinleri (TR + EN). Iki dilin anahtarlari ayni olmali: `npm run check` bunu dogrular.
// Yazim kurali: stop-slop (github.com/hardikpandya/stop-slop). Uzun tire yok, dolgu kelime yok,
// "X degil, Y" kalibi yok, somut sayi ve isim var. Rakamlar oyunun src/config dosyalarindan alindi.
import { SITE } from './site.js';

const email = SITE.contactEmail;

const tr = {
  langName: 'Türkçe',
  switchTo: 'English',
  nav: { home: 'Ana sayfa', support: 'Destek', privacy: 'Gizlilik', skip: 'İçeriğe geç', menu: 'Menü' },
  store: {
    play: 'Google Play',
    apple: 'App Store',
    soon: 'Yakında',
    get: 'İndir',
    playAlt: "Google Play'de BLOCKORA",
    appleAlt: "App Store'da BLOCKORA"
  },
  home: {
    title: 'BLOCKORA · Blok bulmaca oyunu',
    description:
      '8×8 tahtada blokları yerleştir, satır ve sütunları temizle. Kombo, bomba ve 30 günlük ödül takvimi olan ücretsiz blok bulmaca oyunu.',
    eyebrow: 'Android için blok bulmaca',
    heading: 'Blokları yerleştir, çizgileri patlat.',
    lead:
      'Tahta 8×8, elinde üç blok var. Bir satırı ya da sütunu doldurduğunda çizgi silinir ve puanı alırsın. Hiçbir blok sığmayınca tur biter.',
    facts: [
      { k: 'Hesap', v: 'Gerekmez' },
      { k: 'İnternet', v: 'Yalnızca reklam için' },
      { k: 'Dil', v: 'Türkçe, English' }
    ],
    heroAlt: 'Renkli bloklarla dolu 8×8 oyun tahtası',
    showcaseTitle: 'Oyunda neler var',
    shots: [
      {
        img: 'multi-clear',
        alt: 'Tahtada aynı anda temizlenen birden çok çizgi',
        title: 'Çizgileri patlat',
        text: 'Tek çizgi 600 puan getirir. Aynı hamlede dört çizgi silersen 4.800 alırsın. Tahtayı tamamen boşaltan hamleye 9.000 puan bonus eklenir.'
      },
      {
        img: 'combo-x5',
        alt: 'Kombo ×5 rozeti ve temizlenen çizgiler',
        title: 'Kombo ×8',
        text: 'Art arda temizledikçe çarpan büyür ve ×8 ile tavan yapar. Temizlemeden iki hamle yapabilirsin, üçüncüsünde seri biter.'
      },
      {
        img: 'bomb-area-hedef',
        alt: '3×3 Alan Bombası için hedef seçimi',
        title: 'Üç bomba',
        text: '3×3 Alan Bombası ve Çizgi Bombası 500 altın. Mega Bomba 2.500 altın ve tahtadaki bütün blokları siler. Altının yetmezse ödüllü reklamla da kazanırsın.'
      },
      {
        img: 'gunluk-odul',
        alt: '30 günlük ödül takvimi',
        title: '30 günlük ödül',
        text: 'Her gün girdiğinde sıradaki ödülü alırsın, kaçırdığın gün seriyi sıfırlamaz. 30. gün 2.500 altın ve 8 bombalık büyük sandığı açar.'
      },
      {
        img: 'oyun-sonu-rekor',
        alt: 'Oyun sonu ekranında yeni rekor',
        title: 'Rekorunu kır',
        text: 'En yüksek skorun telefonunda saklanır. Oyunu kapatırsan yarım kalan turuna Devam Et ile dönersin.'
      },
      {
        img: 'dunya-gold',
        alt: 'GOLD WORLD teması',
        title: 'Beş dünya',
        text: "Skorun yükseldikçe tema değişir: 100.000'de BLUE, 250.000'de RED, 500.000'de GOLD, 750.000'de LEGEND WORLD. Bloklar da zorlaşır."
      }
    ],
    closingTitle: 'Ücretsiz, hesapsız.',
    closingText: 'Gerçek parayla satın alma yok. Altını ve bombaları oynayarak kazanırsın, reklam izlemek senin seçimin.'
  },
  privacy: {
    title: 'Gizlilik Politikası',
    description: 'BLOCKORA hangi verileri kullanır, nerede saklar ve kimlerle paylaşır.',
    updated: 'Yürürlük tarihi',
    intro:
      'Bu politika BLOCKORA mobil oyununun Android ve iOS sürümleri için geçerlidir. Oyunda hesap açmazsın, adını veya e-posta adresini istemeyiz. Kendi sunucumuz yok; oyun verin telefonunda kalır. Reklamları Appodeal reklam platformu ve onun reklam ortakları (Google AdMob dahil) gösterir; bunlar bazı cihaz verilerini işler. Ayrıntılar aşağıda.',
    sections: [
      {
        h: 'Telefonunda sakladığımız veriler',
        p: [
          'Oyun ilerlemeni kaydetmek için şu bilgileri yalnızca cihazında tutarız: en yüksek skor, yarım kalan tur, altın ve bomba sayısı, günlük ödül ilerlemesi, ses, titreşim ve dil ayarı.',
          'Bu veriler cihazından çıkmaz ve bize gelmez. Uygulamayı silersen ya da uygulama verilerini temizlersen hepsi silinir. Android, telefon yedeğini açtıysan bu verileri Google hesabındaki yedeğe ekleyebilir; bu yedeği Google yönetir.'
        ]
      },
      {
        h: 'Reklamlar: Appodeal ve reklam ortakları',
        p: [
          'Oyunda yalnızca ödüllü reklam var. Reklamı sen başlatırsın (örneğin altın ×2, bomba veya Devam Et için); oyun kendiliğinden reklam açmaz.',
          'Reklamları Appodeal (Appodeal, Inc.) yönetir. Appodeal her reklam için birden çok reklam ağını karşılaştırır ve reklamı bunlardan biri gösterir. Bu ağlar arasında Google AdMob, AppLovin, Unity Ads, ironSource, Meta Audience Network, Mintegral, Liftoff (Vungle), Pangle, InMobi, Chartboost, BidMachine, Moloco, Amazon, Yandex ve myTarget var.',
          'Reklamı göstermek, ölçmek ve sahtekarlığı önlemek için Appodeal ve reklamı gösteren ağ şu verileri toplayabilir: reklam kimliği (Android Advertising ID, iOS IDFA), IP adresi, cihaz modeli ve işletim sistemi, dil, operatör ve bağlantı türü, yaklaşık konum (IP üzerinden), uygulama adı ve sürümü ve reklamla etkileşimin. Her şirket bu verileri kendi gizlilik politikasına göre işler.'
        ],
        links: [
          { label: 'Appodeal Gizlilik Politikası', href: 'https://appodeal.com/privacy-policy/' },
          { label: 'Google Gizlilik Politikası', href: 'https://policies.google.com/privacy?hl=tr' },
          { label: 'Google iş ortağı sitelerinde ve uygulamalarında verileri nasıl kullanır', href: 'https://policies.google.com/technologies/partner-sites?hl=tr' }
        ]
      },
      {
        h: 'Reklam izni ve seçimlerin',
        list: [
          'Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre’deysen oyun, reklam yüklemeden önce Appodeal’in onay formunu (Google’ın onay sistemi üzerine kurulu) gösterir. Kişiselleştirilmiş reklamı reddedersen sınırlı reklam alırsın.',
          'Android’de Ayarlar > Gizlilik > Reklamlar (Google) menüsünden reklam kimliğini silebilir veya sıfırlayabilirsin.',
          'iOS’ta reklam kimliği yalnızca uygulama izleme (App Tracking Transparency) izni verirsen kullanılır. İzni Ayarlar > Gizlilik ve Güvenlik > İzleme menüsünden kapatırsın.',
          'Reklam izlemek zorunda değilsin. Reklamsız da oyunun tamamını oynarsın.'
        ]
      },
      {
        h: 'İzinler',
        p: [
          'Oyunun kendisi yalnızca internet (reklamları yüklemek için) ve titreşim iznini kullanır.',
          'Reklam kütüphaneleri uygulamaya kendi izinlerini ekler: ağ ve Wi-Fi durumu, reklam kimliği ve Android reklam hizmetleri (Privacy Sandbox), eski Android sürümlerinde reklam önbelleği için depolama, arka planda reklam indirme, uygulamanın hangi mağazadan yüklendiğini öğrenme. Oyunda satın alma olmadığı halde bazı kütüphaneler Google Play ödeme iznini de bildirir; oyun bu izni kullanmaz.',
          'Kamera, mikrofon, rehber, fotoğraflar veya GPS konumu izni istemeyiz.'
        ]
      },
      {
        h: 'Satın alma',
        p: ['Oyunda gerçek parayla satın alma yok. Altın ve bombaları oyun içinde kazanırsın; gerçek para değerleri yoktur.']
      },
      {
        h: 'Çocuklar',
        p: [
          'BLOCKORA’yı 13 yaşından küçük çocuklara yönelik tasarlamadık ve bilerek çocuklardan kişisel veri toplamayız. Bir çocuğun verisinin işlendiğini düşünüyorsan bize yaz; Appodeal ve reklam ortaklarıyla birlikte silinmesi için yardımcı oluruz.'
        ]
      },
      {
        h: 'Veri paylaşımı ve satış',
        p: [
          'Kişisel verini satmayız. Elimizde paylaşacak kişisel veri yok; reklam verilerini doğrudan Appodeal ve reklamı gösteren ağ toplar.'
        ]
      },
      {
        h: 'Haklarını kullanma',
        p: [
          'KVKK, GDPR veya bulunduğun ülkenin yasası sana verilerine erişme, düzeltme ve silme hakkı verir. Cihazındaki oyun verisini uygulamayı silerek kendin silersin. Appodeal’in ve reklam ağlarının işlediği veriler için onların gizlilik politikalarındaki iletişim yollarını kullanabilir ya da bize yazabilirsin.'
        ]
      },
      {
        h: 'Değişiklikler',
        p: [
          'Politikayı değiştirirsek bu sayfayı ve yürürlük tarihini güncelleriz. Yeni bir veri türü toplamaya başlarsak bunu oyunun güncelleme notlarına da yazarız.'
        ]
      },
      {
        h: 'İletişim',
        p: [`Sorularını ${email} adresine gönder. Yedi gün içinde yanıt veririz.`]
      }
    ]
  },
  support: {
    title: 'Destek',
    description: 'BLOCKORA için sık sorulan sorular ve iletişim.',
    intro: 'Sorununu aşağıda bulamazsan bize yaz. Mesajına telefon modelini ve ana menünün altındaki sürüm numarasını ekle, sorunu daha çabuk buluruz.',
    contactTitle: 'Bize yaz',
    contactText: 'E-postaya yedi gün içinde yanıt veririz.',
    contactButton: 'E-posta gönder',
    mailSubject: 'BLOCKORA destek',
    faqTitle: 'Sık sorulan sorular',
    groups: [
      {
        h: 'Oyun',
        items: [
          {
            q: 'Nasıl oynanır?',
            a: 'Alttaki üç bloğu tahtaya sürükle. Bir satır ya da sütun dolunca silinir. Üç bloğu da yerleştirince yeni üçlü gelir. Elindeki hiçbir blok tahtaya sığmazsa tur biter.'
          },
          {
            q: 'Puanı ne belirler?',
            a: 'Yerleştirdiğin her kare 30 puan. Çizgi puanı aynı hamlede sildiğin çizgi sayısına göre artar: 1 çizgi 600, 2 çizgi 1.500, 3 çizgi 3.000, 4 çizgi 4.800. Kombo çarpanı temizleme puanına uygulanır.'
          },
          {
            q: 'Kombo neden bitti?',
            a: 'Çizgi silmeden en fazla iki hamle yapabilirsin. Üçüncü hamlede de çizgi silmezsen ekranda "Kombo bitti" yazar ve çarpan sıfırlanır.'
          },
          {
            q: 'Bomba nasıl kullanılır?',
            a: 'Tahtanın altındaki bomba çubuğundan bombayı seç, sonra hedef hücreye dokun. Önizlemeyi görürsün; patlatmak için tekrar dokun ya da İptal ile vazgeç. Mega Bomba için tahtanın herhangi bir yerine dokunman yeter, bütün blokları siler.'
          },
          {
            q: 'Altını nereden kazanırım?',
            a: 'Her temizlemede 1 ile 3 altın, her 30.000 puanda 5 altın ve günlük ödüllerden. Tur sonunda reklam izlersen o turun altınını iki katına çıkarırsın.'
          },
          {
            q: 'Mini Oyunlar neden kilitli?',
            a: 'Mini Oyunlar henüz hazır değil. Hazır olunca bir güncellemeyle açacağız.'
          }
        ]
      },
      {
        h: 'Kayıt ve cihaz',
        items: [
          {
            q: 'İlerlemem silinir mi?',
            a: 'İlerlemen telefonunda saklanır. Uygulamayı silmek veya uygulama verisini temizlemek rekorunu, altınını ve bombalarını siler. Hesap sistemi olmadığı için ilerlemeni başka telefona taşıyamazsın.'
          },
          {
            q: 'Günlük ödülüm gelmedi.',
            a: 'Ödül takvim gününe göre açılır, telefonunun saatini kullanır. Saati geri aldıysan oyun ödülü bekletir ve uyarı gösterir. Saati otomatik ayara döndürünce ödül gelir.'
          },
          {
            q: 'Dili nasıl değiştiririm?',
            a: 'Ana menüde dişli simgesine dokun, Ayarlar’da Dil satırından Türkçe veya English seç. Ses ve titreşimi de aynı ekrandan kapatırsın.'
          },
          {
            q: 'İnternetsiz oynayabilir miyim?',
            a: 'Evet. İnternet yalnızca ödüllü reklamlar için gerekir. Bağlantı yoksa reklam düğmeleri "Reklam yüklenemedi" der, oyunun geri kalanı çalışır.'
          }
        ]
      },
      {
        h: 'Reklamlar',
        items: [
          {
            q: 'Reklam izledim ama ödül gelmedi.',
            a: 'Ödül, reklamı sonuna kadar izlediğinde verilir. Reklamı erken kapatırsan oyun "Reklam tamamlanmadı" der. Reklam açılmıyorsa bağlantını kontrol edip birkaç dakika sonra tekrar dene.'
          },
          {
            q: 'Kişiselleştirilmiş reklam iznimi nasıl değiştiririm?',
            a: 'Android’de Ayarlar > Gizlilik > Reklamlar menüsünü, iOS’ta Ayarlar > Gizlilik ve Güvenlik > İzleme menüsünü kullan. Ayrıntılar Gizlilik Politikası’nda.'
          }
        ]
      },
      {
        h: 'Veri silme',
        items: [
          {
            q: 'Verilerimi nasıl silerim?',
            a: 'Oyun verin yalnızca telefonunda. Android’de Ayarlar > Uygulamalar > BLOCKORA > Depolama > Verileri temizle, iOS’ta uygulamayı sil. Bizim sunucumuzda senin adına kayıt yok, bu yüzden silmemiz gereken başka veri de yok.'
          }
        ]
      }
    ]
  },
  footer: {
    rights: 'Tüm hakları saklıdır.',
    madeWith: 'Phaser ile yapıldı.'
  },
  notFound: { title: 'Sayfa bulunamadı', text: 'Aradığın sayfa taşınmış ya da hiç olmamış olabilir.', back: 'Ana sayfaya dön' }
};

const en = {
  langName: 'English',
  switchTo: 'Türkçe',
  nav: { home: 'Home', support: 'Support', privacy: 'Privacy', skip: 'Skip to content', menu: 'Menu' },
  store: {
    play: 'Google Play',
    apple: 'App Store',
    soon: 'Coming soon',
    get: 'Get it',
    playAlt: 'BLOCKORA on Google Play',
    appleAlt: 'BLOCKORA on the App Store'
  },
  home: {
    title: 'BLOCKORA · Block puzzle game',
    description:
      'Place blocks on an 8×8 board and clear rows and columns. A free block puzzle with combos, bombs and a 30-day reward calendar.',
    eyebrow: 'Block puzzle for Android',
    heading: 'Place blocks, blast the lines.',
    lead:
      'You get an 8×8 board and three blocks. Fill a row or a column and the line clears for points. The round ends when none of your blocks fit.',
    facts: [
      { k: 'Account', v: 'None needed' },
      { k: 'Internet', v: 'Only for ads' },
      { k: 'Language', v: 'English, Türkçe' }
    ],
    heroAlt: 'The 8×8 game board filled with colourful blocks',
    showcaseTitle: 'In the game',
    shots: [
      {
        img: 'multi-clear',
        alt: 'Several lines clearing on the board at once',
        title: 'Blast the lines',
        text: 'One line pays 600 points. Clear four lines in one move and you get 4,800. Empty the whole board and the move adds a 9,000 point bonus.'
      },
      {
        img: 'combo-x5',
        alt: 'Combo ×5 badge and cleared lines',
        title: 'Combo ×8',
        text: 'Clear lines back to back and the multiplier climbs until it caps at ×8. You can make two moves without a clear; the third one ends the streak.'
      },
      {
        img: 'bomb-area-hedef',
        alt: 'Choosing a target for the 3×3 Area Bomb',
        title: 'Three bombs',
        text: 'The 3×3 Area Bomb and the Line Bomb cost 500 coins. The Mega Bomb costs 2,500 and wipes every block off the board. Short on coins? Earn bombs with rewarded ads.'
      },
      {
        img: 'gunluk-odul',
        alt: '30-day reward calendar',
        title: '30-day rewards',
        text: 'Open the game on a new day and you collect the next reward. Missing a day keeps your progress. Day 30 opens the grand chest with 2,500 coins and 8 bombs.'
      },
      {
        img: 'oyun-sonu-rekor',
        alt: 'New record on the game over screen',
        title: 'Beat your record',
        text: 'Your best score stays on your phone. Close the game mid-round and Continue takes you back to the same board.'
      },
      {
        img: 'dunya-gold',
        alt: 'GOLD WORLD theme',
        title: 'Five worlds',
        text: 'Your score changes the theme: BLUE at 100,000, RED at 250,000, GOLD at 500,000 and LEGEND WORLD at 750,000. The blocks get harder too.'
      }
    ],
    closingTitle: 'Free, no account.',
    closingText: 'No real-money purchases. You earn coins and bombs by playing, and ads are your call.'
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'What data BLOCKORA uses, where it is stored and who it is shared with.',
    updated: 'Effective date',
    intro:
      'This policy covers the Android and iOS versions of the BLOCKORA mobile game. You do not create an account, and we never ask for your name or email address. We run no servers of our own; your game data stays on your phone. The Appodeal ad platform and its ad partners (Google AdMob among them) serve the ads and process some device data. Details follow.',
    sections: [
      {
        h: 'Data we keep on your phone',
        p: [
          'To save your progress, the game keeps this information on your device only: best score, unfinished round, coins and bombs, daily reward progress, and your sound, vibration and language settings.',
          'This data never leaves your device and never reaches us. Uninstalling the app or clearing its data deletes all of it. If you turned on phone backup, Android may include this data in the backup on your Google account; Google manages that backup.'
        ]
      },
      {
        h: 'Ads: Appodeal and its ad partners',
        p: [
          'The game shows rewarded ads only. You start each ad yourself (for example for coins ×2, a bomb or Continue); the game never opens an ad on its own.',
          'Appodeal (Appodeal, Inc.) manages the ads. For each ad, Appodeal compares several ad networks and one of them shows the ad. These networks include Google AdMob, AppLovin, Unity Ads, ironSource, Meta Audience Network, Mintegral, Liftoff (Vungle), Pangle, InMobi, Chartboost, BidMachine, Moloco, Amazon, Yandex and myTarget.',
          'To show and measure ads and to prevent fraud, Appodeal and the network that shows the ad may collect: your advertising ID (Android Advertising ID, iOS IDFA), IP address, device model and OS version, language, carrier and connection type, approximate location derived from the IP address, app name and version, and how you interact with the ad. Each company processes this data under its own privacy policy.'
        ],
        links: [
          { label: 'Appodeal Privacy Policy', href: 'https://appodeal.com/privacy-policy/' },
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' },
          { label: 'How Google uses data from partner sites and apps', href: 'https://policies.google.com/technologies/partner-sites?hl=en' }
        ]
      },
      {
        h: 'Ad consent and your choices',
        list: [
          'In the European Economic Area, the UK and Switzerland, the game shows Appodeal’s consent form (built on Google’s consent system) before it loads any ad. If you decline personalised ads, you get limited ads.',
          'On Android, open Settings > Privacy > Ads (Google) to delete or reset your advertising ID.',
          'On iOS, the game uses your advertising ID only if you allow tracking through App Tracking Transparency. Turn it off in Settings > Privacy & Security > Tracking.',
          'Watching ads is optional. You can play the whole game without them.'
        ]
      },
      {
        h: 'Permissions',
        p: [
          'The game itself uses only the internet permission (to load ads) and vibration.',
          'The ad libraries add their own permissions: network and Wi-Fi state, advertising ID and Android ad services (Privacy Sandbox), storage for the ad cache on older Android versions, downloading ads in the background, and checking which store installed the app. Some libraries also declare the Google Play billing permission even though the game has no purchases; the game does not use it.',
          'We do not ask for camera, microphone, contacts, photos or GPS location permissions.'
        ]
      },
      {
        h: 'Purchases',
        p: ['The game has no real-money purchases. You earn coins and bombs inside the game; they have no cash value.']
      },
      {
        h: 'Children',
        p: [
          'We did not design BLOCKORA for children under 13, and we do not knowingly collect personal data from children. If you believe a child’s data was processed, write to us and we will work with Appodeal and its ad partners to have it deleted.'
        ]
      },
      {
        h: 'Sharing and sale of data',
        p: ['We do not sell your personal data. We hold no personal data to share; Appodeal and the network that shows the ad collect ad data directly.']
      },
      {
        h: 'Your rights',
        p: [
          'GDPR, KVKK or the law where you live gives you the right to access, correct and delete your data. You delete the game data on your device by uninstalling the app. For data Appodeal and the ad networks process, use the contact options in their privacy policies or write to us.'
        ]
      },
      {
        h: 'Changes',
        p: [
          'If we change this policy, we update this page and its effective date. If we start collecting a new type of data, we also say so in the game’s release notes.'
        ]
      },
      {
        h: 'Contact',
        p: [`Send questions to ${email}. We reply within seven days.`]
      }
    ]
  },
  support: {
    title: 'Support',
    description: 'Frequently asked questions and contact for BLOCKORA.',
    intro: 'If your question is not answered below, write to us. Include your phone model and the version number at the bottom of the main menu so we can find the problem faster.',
    contactTitle: 'Write to us',
    contactText: 'We answer email within seven days.',
    contactButton: 'Send email',
    mailSubject: 'BLOCKORA support',
    faqTitle: 'Frequently asked questions',
    groups: [
      {
        h: 'Gameplay',
        items: [
          {
            q: 'How do I play?',
            a: 'Drag the three blocks at the bottom onto the board. A full row or column clears. Place all three and you get a new set. The round ends when none of your blocks fit.'
          },
          {
            q: 'How is the score calculated?',
            a: 'Each square you place is worth 30 points. Line points grow with the number of lines you clear in one move: 1 line 600, 2 lines 1,500, 3 lines 3,000, 4 lines 4,800. The combo multiplier applies to clear points.'
          },
          {
            q: 'My combo ended. Why?',
            a: 'You can make up to two moves without clearing a line. If the third move clears nothing either, the game shows "Combo over" and the multiplier resets.'
          },
          {
            q: 'How do bombs work?',
            a: 'Pick a bomb from the bar under the board, then tap a target cell. You see a preview; tap again to detonate or press Cancel. For the Mega Bomb, tap anywhere on the board; it clears every block.'
          },
          {
            q: 'How do I earn coins?',
            a: 'Each clear gives 1 to 3 coins, every 30,000 points gives 5, and the daily rewards add more. Watch an ad at the end of a round to double that round’s coins.'
          },
          {
            q: 'Why are Mini Games locked?',
            a: 'Mini Games are not ready yet. We will unlock them in an update.'
          }
        ]
      },
      {
        h: 'Saves and devices',
        items: [
          {
            q: 'Can I lose my progress?',
            a: 'Your progress lives on your phone. Uninstalling the app or clearing its data deletes your record, coins and bombs. The game has no accounts, so you cannot move progress to another phone.'
          },
          {
            q: 'My daily reward did not appear.',
            a: 'Rewards unlock by calendar day using your phone’s clock. If you set the clock back, the game holds the reward and shows a warning. Switch the clock back to automatic and the reward returns.'
          },
          {
            q: 'How do I change the language?',
            a: 'Tap the gear icon on the main menu and pick Türkçe or English in the Language row. You can turn sound and vibration off on the same screen.'
          },
          {
            q: 'Can I play offline?',
            a: 'Yes. You need the internet for rewarded ads only. Offline, the ad buttons say "Ad failed to load" and the rest of the game works.'
          }
        ]
      },
      {
        h: 'Ads',
        items: [
          {
            q: 'I watched an ad and got no reward.',
            a: 'You get the reward when you watch the ad to the end. If you close it early, the game says "Ad not completed". If ads do not open, check your connection and try again in a few minutes.'
          },
          {
            q: 'How do I change personalised ad consent?',
            a: 'On Android use Settings > Privacy > Ads; on iOS use Settings > Privacy & Security > Tracking. The Privacy Policy has the details.'
          }
        ]
      },
      {
        h: 'Deleting data',
        items: [
          {
            q: 'How do I delete my data?',
            a: 'Your game data is on your phone only. On Android go to Settings > Apps > BLOCKORA > Storage > Clear data; on iOS delete the app. We keep no records about you on any server, so there is nothing else for us to delete.'
          }
        ]
      }
    ]
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Made with Phaser.'
  },
  notFound: { title: 'Page not found', text: 'The page you are looking for moved or never existed.', back: 'Back to home' }
};

export const CONTENT = { tr, en };
export const t = (lang) => CONTENT[lang] ?? CONTENT.tr;
