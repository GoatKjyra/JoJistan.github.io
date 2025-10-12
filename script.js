const characters = [
  {
    name: "Jonathan Joestar",
    part: "Phantom Blood:",
    img: "images/jonathan.jpeg",
    desc: "Jonathan Joestar, 19. yüzyıl İngiltere’sinde doğmuş, Phantom Blood’un başkahramanı ve Joestar ailesinin onurlu varisidir. Asil, nazik ve cesur bir karakter olan Jonathan, üvey kardeşi Dio Brando’nun kötülükleriyle mücadele etmiş ve ailesini korumak için ölümcül savaşlara girmiştir. Hamon (Ripple) enerjisini kullanarak vampirler ve doğaüstü yaratıklarla savaşmış, fiziksel gücünü ve stratejisini ustaca birleştirmiştir. Sonunda Dio’ya karşı verdiği son mücadelede hayatını kaybetmiş olsa da mirası, sonraki Joestar nesilleri için ilham kaynağı olmuştur.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
    name: "Joseph Joestar",
    part: "Battle Tendency:",
    img: "images/joseph.jpeg",
    desc: "Joseph Joestar, 1920’lerde doğmuş, Battle Tendency döneminin başkahramanıdır ve Jonathan Joestar’ın torunudur. Zeki, alaycı ve kurnaz bir kişiliğe sahip olan Joseph, düşmanlarını kandırma ve stratejik düşünme yeteneğiyle tanınır. Hamon kullanıcısı olarak ustalaşmış, insanüstü refleksleri ve zekâsıyla Pillar Men olarak bilinen kadim varlıklara karşı savaşmıştır. Özellikle Caesar Zeppeli ve Lisa Lisa ile birlikte insanlığın kaderi için savaşan Joseph, mizahi tavrının altında güçlü bir kararlılık barındırır. Battle Tendency boyunca hem olgunlaşmış hem de Joestar soyunun kahramanlık mirasını sürdürmüştür.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
    name: "Jotaro Kujo",
    part: "Stardust Crusaders:",
    img: "images/jotaro.jpeg",
    desc: "Jotaro Kujo, Stardust Crusaders döneminin başkahramanıdır ve Joseph Joestar’ın torunudur. Soğukkanlı, ciddi ve güçlü bir kişiliğe sahip olan Jotaro, Stand gücü Star Platinum ile insanüstü hız, güç ve hassasiyet sergiler. Annesini kurtarmak ve DIO’nun Joestar soyuna olan lanetini bitirmek için arkadaşlarıyla birlikte Mısır’a doğru tehlikeli bir yolculuğa çıkar. Sert dış görünüşünün altında derin bir adalet duygusu ve ailesine bağlılık yatan Jotaro, sakin tavırları ve “Yare Yare Daze” sözüyle serinin en ikonik karakterlerinden biri olmuştur.",
    stand: "images/star_platinum.jpeg",
    standName: "Star Platinum"
  },
  {
    name: "Josuke Higashikata",
    part: "Diamond is Unbreakable:",
    img: "images/josuke.jpeg",
    desc: "Josuke Higashikata, 1980’lerde Japonya’da doğmuş, Diamond is Unbreakable’ın başkahramanı ve Joseph Joestar’ın gayri meşru oğlunun torunudur. Nazik, cesur ve sevdiklerine bağlı bir karakter olan Josuke, Stand gücü Crazy Diamond’ı kazanmış ve bu Stand ile nesneleri onarma, iyileştirme ve dövüşte rakiplerine karşı üstünlük sağlama yeteneklerini kullanmıştır. Sevdiklerini ve kasabasını korumak için mücadele etmiş, düşmanlarına karşı stratejik ve yaratıcı taktikler geliştirmiştir. Mizahı, cesareti ve Stand gücü sayesinde Joestar neslinin önemli kahramanlarından biri olmuştur.",
    stand: "images/crazy_diamond.jpeg",
    standName: "Crazy Diamond"
  },
  {
    name: "Giorno Giovanna",
    part: "Golden Wind:",
    img: "images/giorno.jpeg",
    desc: "Giorno Giovanna, 1985’lerde İtalya’da doğmuş, Golden Wind’in başkahramanı ve Dio Brando’nun Jonathan Joestar’ın vücudunu kullanarak doğan oğlu torunudur. Cesur, kararlı ve adaletli bir karakter olan Giorno, Stand gücü Gold Experience’ı kazanmış ve bu Stand ile nesneleri canlı varlıklara dönüştürme, saldırı ve iyileştirme yeteneklerini kullanmıştır. Mafya dünyasında düzeni sağlamak ve masumları korumak için mücadele etmiş, strateji ve zekâsıyla düşmanlarını alt etmiş ve Joestar ile Dio soyunun mirasını kendi yolunda birleştirmiştir.",
    stand: "images/gold_experience.jpeg",
    standName: "Gold Experience"
  },
  {
    name: "Jolyne Cujoh",
    part: "Stone Ocean:",
    img: "images/jolyne.jpeg",
    desc: "Jolyne Cujoh, 2010’larda Japonya’da doğmuş, Stone Ocean’un başkahramanı ve Jotaro Kujo’nun kızıdır. Cesur, inatçı ve adaletli bir karakter olan Jolyne, Stand gücü Stone Free’yi kazanmış ve bu Stand ile kendi vücudunu ip gibi açıp hareket ettirme, saldırı ve savunma yeteneklerini kullanmıştır. Hapishane ortamında sevdiklerini ve masumları korumak için mücadele etmiş, strateji ve zekâsıyla düşmanlarını alt etmiş ve Joestar neslinin mirasını sürdürmüştür.",
    stand: "images/stone_free.jpeg",
    standName: "Stone Free"
  },
  {
    name: "Johnny Joestar",
    part: "Steel Ball Run:",
    img: "images/johnny.jpeg",
    desc: "Johnny Joestar, 1890’larda Amerika’da doğmuş, Steel Ball Run’ın başkahramanı ve Joestar ailesinin uzak bir soyudur. Hırslı, kararlı ve azimli bir karakter olan Johnny, Stand gücü Tusk’u kazanmış ve bu Stand ile mermi ve dönen enerji tekniklerini kullanarak hem saldırı hem savunma yapabilmiştir. Yaralanması ve engelliliğine rağmen yarışta ve düşmanlarına karşı strateji ve zekâsını kullanmış, hedeflerine ulaşmak için büyük fedakârlıklar göstermiş ve Joestar soyunun mirasını kendi yolunda sürdürmüştür.",
    stand: "images/tusk.jpeg",
    standName: "Tusk ACT4"
  },
  {
    name: "Josuke (Gappy)",
    part: "JoJolion:",
    img: "images/josuke8.jpeg",
    desc: "Josuke Higashikata, 2010’larda Japonya’da doğmuş, Jojolion’un başkahramanı ve Higashikata ailesinin bir üyesidir. Nazik, meraklı ve kararlı bir karakter olan Josuke, Stand gücü Soft & Wet’i kazanmış ve bu Stand ile nesnelerden çeşitli yetenekler çalma, saldırı ve savunma yapma becerilerini kullanmıştır. Ailesini ve çevresindekileri korumak için mücadele etmiş, gizemleri çözmek ve düşmanlarını alt etmek için strateji ve zekâsını kullanmış ve Joestar soyunun mirasını kendi yolunda sürdürmüştür.",
    stand: "images/soft_wet.jpeg",
    standName: "Soft & Wet"
  },
  {
    name: "DIO",
    part: "Stardust Crusaders:",
    img: "images/dio.jpeg",
    desc: "DIO, Stardust Crusaders döneminin başantagonistidir ve Joestar soyunun en büyük düşmanıdır. Jonathan Joestar’ın bedenini ele geçirdikten sonra yıllarca gizlenmiş, ardından The World adlı Stand gücünü kazanmıştır. Bu Stand, zamanı birkaç saniyeliğine durdurabilir ve DIO’ya mutlak üstünlük sağlar. Kibirli, karizmatik ve acımasız bir kişiliğe sahip olan DIO, ölümsüzlüğünü ve gücünü mutlak hâkimiyete dönüştürmek ister. Jotaro ve ekibine karşı verdiği destansı savaşta Joestar mirasıyla yeniden yüzleşir ve sonunda kendi hırsının kurbanı olur.",
    stand: "images/the_world.jpeg",
    standName: "The World"
  },
  {
    name: "Toru",
    part: "JoJolion:",
    img: "images/tooru.jpeg",
    desc: "Toru, 2010’larda Japonya’da doğmuş, Jojolion’un önemli karakterlerinden biridir ve Josuke Higashikata’nın karşısındaki düşmanlardan biridir. Soğukkanlı, acımasız ve stratejik bir karakter olan Toru, Stand gücü Wonder of U’yu kazanmış ve bu Stand ile felaket ve kader temelli saldırılar yaparak düşmanlarını çaresiz bırakma yeteneğini kullanmıştır. Amacı ve motivasyonları doğrultusunda Josuke ve çevresindekilere karşı mücadele etmiş, zekâsı ve Stand gücü sayesinde büyük tehdit oluşturmuş ve hikâyenin gidişatını etkilemiştir.",
    stand: "images/wou.jpeg",
    standName: "Wonder of U"
  },
  {
    name: "Rohan Kishibe",
    part: "Diamond is Unbreakable:",
    img: "images/rohan.jpeg",
    desc: "Rohan Kishibe, 1980’lerde Japonya’da doğmuş, Diamond is Unbreakable’ın önemli karakterlerinden biridir ve manga sanatçısıdır. Meraklı, zeki ve biraz kibirli bir karakter olan Rohan, Stand gücü Heaven’s Door’u kazanmış ve bu Stand ile insanları kitap gibi açıp anılarını okuyabilir, değiştirebilir veya yazabilir. Bu gücü hem bilgi toplamak hem de stratejik avantaj sağlamak için kullanır. Rohan, Morioh’u ve çevresindekileri korumak için gerektiğinde düşmanlarına karşı mücadele etmiş, zekâsı ve Stand yeteneğiyle JoJo evreninde eşsiz bir konuma sahip olmuştur.",
    stand: "images/heavens_door.jpeg",
    standName: "Heavens Door"
  },
  {
  name: "Robert Speedwagon",
    part: "Phantom Blood:",
    img: "images/speed_wagon.jpeg",
    desc: "Robert E. O. Speedwagon, 19. yüzyıl İngiltere’sinde doğmuş, Phantom Blood ve Battle Tendency dönemlerinde Jonathan ve Joseph Joestar’ın yakın dostu ve sadık müttefikidir. Cesur, fedakâr ve güçlü bir adalet duygusuna sahip olan Speedwagon, başlangıçta sokak çetesi lideriyken Joestar ailesiyle tanıştıktan sonra düşmanlara karşı savaşta stratejik destek ve lojistik yardım sağlamıştır. Daha sonra kendi şirketi Speedwagon Vakfı’nı kurarak, Joestar soyunun antik düşmanları ve doğaüstü tehditlerle mücadelede maddi ve bilimsel destek sunmuş, JoJo evreninde güvenilir bir müttefik olarak öne çıkmıştır.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Caesar Zeppeli",
    part: "Battle Tendency:",
    img: "images/ceaser.jpeg",
    desc: "Caesar Zeppeli, 1920’lerde İtalya’da doğmuş, Battle Tendency döneminin önemli karakterlerinden ve Joseph Joestar’ın yakın arkadaşıdır. Cesur, gururlu ve fedakâr bir karakter olan Caesar, Hamon (Ripple) enerjisi kullanıcısıdır ve halka şeklinde Hamon saldırıları ile düşmanlarını alt edebilir. Joseph ile birlikte Pillar Men’e karşı savaşmış, strateji ve cesaretiyle önemli katkılar sağlamıştır. Ailesinin Hamon geleneğini sürdüren Caesar, genç yaşta büyük fedakârlıklar yapmış ve Joestar ekibinin vazgeçilmez müttefiklerinden biri olmuştur.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Diavolo",
    part: "Golden Wind:",
    img: "images/diavolo.jpeg",
    desc: "Diavolo, 1980’lerde İtalya’da doğmuş, Golden Wind’in başantagonisti ve Passione mafyasının gizemli lideridir. Gizemli, acımasız ve stratejik bir karakter olan Diavolo, Stand gücü King Crimson’ı kazanmış ve bu Stand ile zamanı belli bir süre atlayarak düşmanlarının hareketlerini önceden tahmin edebilir ve onları etkisiz hale getirebilir. Mafya dünyasında düzeni kendi çıkarları doğrultusunda şekillendirmek için mücadele etmiş, rakiplerini hem güç hem zeka kullanarak alt etmiş ve Joestar soyunun yeni nesliyle çatışarak hikâyenin ana tehdidini oluşturmuştur.",
    stand: "images/king_crimson.jpeg",
    standName: "King Crimson"
  },
  {
    name: "Enrico Pucci",
    part: "Stone Ocean:",
    img: "images/pucci.jpeg",
    desc: "Enrico Pucci, 1970’lerde İtalya’da doğmuş, Stone Ocean’un başantagonisti ve DIO’nun yakın müritlerinden biridir. Kararlı, fanatik ve amansız bir karakter olan Pucci, Stand gücü Whitesnake’i kazanmış ve bu Stand ile insanlardan hafıza ve Stand yeteneklerini çalabilmiştir. Daha sonra Stand’ı C-Moon ve nihai formu Made in Heaven’a evrilmiş, zamanı hızlandırma gücüyle evrenin kaderini değiştirebilecek seviyeye ulaşmıştır. Pucci, hedefleri uğruna büyük fedakârlıklar yapmış, Joestar ailesine karşı strateji ve güç kullanarak Stone Ocean’un ana tehdidi haline gelmiştir.",
    stand: "images/made_in_heaven.jpeg",
    standName: "Made In Heaven"
  },
  {
    name: "Gyro Zeppeli",
    part: "Steel Ball Run:",
    img: "images/gyro.jpeg",
    desc: "Gyro Zeppeli, 1890’larda İtalya’da doğmuş, Steel Ball Run’ın başkahramanlarından biridir ve Spin tekniğinin ustasıdır. Kararlı, cesur ve stratejik bir karakter olan Gyro, dönen çelik toplar (Steel Balls) kullanarak hem saldırı hem savunma yapabilir ve Spin enerjisiyle çeşitli fiziksel ve mucizevi etkiler yaratabilir. Yarışta ve düşmanlarına karşı strateji ve zekâsını ustalıkla kullanmış, Johnny Joestar’a rehberlik etmiş ve Joestar soyunun mirasını Spin tekniğiyle kendi yolunda sürdürmüştür.",
    stand: "images/ball_breaker.jpeg",
    standName: "Ball Breaker"
  },
  {
  name: "Will A. Zeppeli",
    part: "Phantom Blood:",
    img: "images/zeppeli.jpeg",
    desc: "Will A. Zeppeli, 1800’lerin sonlarında İtalya’da doğmuş, Phantom Blood’un önemli karakterlerinden biridir ve Hamon sanatının ustalarındandır. Bilge, cesur ve fedakâr bir karakter olan Zeppeli, Jonathan Joestar’a Hamon’u öğretmiş ve vampir tehdidine karşı savaşta ona rehberlik etmiştir. Hamon’un yaşam enerjisini ustalıkla kullanarak hem saldırı hem savunmada üstünlük sağlamış, insanlığın iyiliği için kendini feda etmiştir. Zeppeli, Joestar soyunun ilk büyük müttefiklerinden biri olarak cesaret ve iradenin sembolü hâline gelmiştir.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Kars",
    part: "Battle Tendency:",
    img: "images/kars.jpeg",
    desc: "Kars, 10.000 yıldan daha eski bir zamanda doğmuş, Battle Tendency’nin başantagonisti ve Pillar Men lideridir. Zeki, acımasız ve kusursuzluğu arayan bir karakter olan Kars, Stone Mask’i yaratarak vampirliğin temelini oluşturmuştur. Nihai hedefi, mükemmel bir varlık olmaktı; bu amaçla Red Stone of Aja’yı kullanarak Ultimate Life Form hâline geldi. Tüm canlıların DNA’sını kontrol edebilme gücüne ulaşan Kars, sonunda uzaya savrularak ölümsüz bir yalnızlığa mahkûm olmuştur.",
    stand: "images/kars_ulf.jpeg",
    standName: "Yok (Ultimate Life Form)"
  },
  {
    name: "Jean Pierre Polnareff",
    part: "Stardust Crusaders:",
    img: "images/pollnaref.jpeg",
    desc: "Jean Pierre Polnareff, 1960’larda Fransa’da doğmuş, Stardust Crusaders’ın önemli kahramanlarından biridir. Cesur, gururlu ve bazen aceleci bir karakter olan Polnareff, kız kardeşinin intikamını almak için DIO’ya karşı Joestar ekibine katılmıştır. Stand gücü Silver Chariot, olağanüstü hız ve kılıç ustalığıyla hem saldırı hem savunmada etkileyici performans sergiler. Polnareff, dostluğa verdiği değer, inancı ve kararlılığıyla Joestar ailesinin en sadık müttefiklerinden biri hâline gelmiştir.",
    stand: "images/silver_chariot.jpeg",
    standName: "Silver Chariot"
  },
  {
    name: "Yoshikage Kira",
    part: "Diamond is Unbreakable:",
    img: "images/kira.jpeg",
    desc: "Yoshikage Kira, 1966’da Japonya’nın Morioh kasabasında doğmuş, Diamond is Unbreakable’ın başantagonistidir. Dışarıdan sakin ve sıradan görünen Kira, aslında saplantılı bir seri katildir ve tek arzusu huzurlu ama gizli bir hayat sürmektir. Stand gücü Killer Queen ile dokunduğu her şeyi patlayıcıya dönüştürür, bu da onu ölümcül ve iz bırakmayan bir tehdit haline getirir. Soğukkanlılığı, zekâsı ve takıntılı doğasıyla Kira, Joestar mirasının karşısındaki en zeki ve tehlikeli düşmanlardan biri olmuştur.",
    stand: "images/killer_queen.jpeg",
    standName: "Killer Queen"
  },
  {
    name: "Bruno Bucciarati",
    part: "Golden Wind:",
    img: "images/bucciarati.jpeg",
    desc: "Bruno Bucciarati, 1980’lerde İtalya’da doğmuş, Golden Wind’in ana karakterlerinden ve Giorno Giovanna’nın en yakın müttefiklerinden biridir. Cesur, adaletli ve lider ruhlu bir karakter olan Bucciarati, Stand gücü Sticky Fingers’ı kullanarak yüzeylerde fermuarlar açabilir, nesneleri veya insanları bu yolla bölüp birleştirebilir. Takım arkadaşlarını korumak ve yozlaşmış mafya düzenine karşı savaşmak için her şeyini ortaya koymuştur. Kararlılığı ve fedakârlığıyla Joestar mirasının en asil temsilcilerinden biri olmuştur.",
    stand: "images/sticky_fingers.jpeg",
    standName: "Sticky Fingers"
  },
  {
    name: "Weather Report",
    part: "Stone Ocean:",
    img: "images/weather_report.jpeg",
    desc: "Weather Report, 1980’lerde doğmuş, Stone Ocean döneminin önemli karakterlerinden biridir ve amnezik bir geçmişe sahiptir. Sessiz, sakin ve gizemli bir kişilik sergileyen Weather Report, hem zekâsı hem de Stand gücü Weather Report ile büyük stratejik avantaj sağlar. Amacı, geçmişini ve kimliğini keşfetmek, sevdiklerini korumak ve çevresindeki tehlikeleri önlemektir. Zamanla kendi iç dünyasıyla yüzleşmiş, Joestar soyunun müttefiklerinden biri olarak hikâyede kritik rol oynamıştır.",
    stand: "images/weather.jpeg",
    standName: "Weather Report"
  },
  {
    name: "Funny Valentine",
    part: "Steel Ball Run:",
    img: "images/valentine.jpeg",
    desc: "Funny Valentine, 1890’larda Amerika’da doğmuş, Steel Ball Run’ın başantagonistidir ve Amerika’nın başkanıdır. Hırslı, stratejik ve vatanına son derece bağlı bir karakter olan Valentine, Stand gücü D4C (Dirty Deeds Done Dirt Cheap) ile paralel evrenler arasında geçiş yapabilir ve farklı versiyonlarını kontrol edebilir. Bu yetenek, onu neredeyse yenilmez hâle getirir ve hedefleri uğruna büyük riskler almasını sağlar. Valentine, yarış ve Joestar soyuna karşı zekâsı ve güçleriyle büyük bir tehdit oluşturmuş ve Steel Ball Run’ın ana antagonistlerinden biri olmuştur.",
    stand: "images/d4c.jpeg",
    standName: "D4C (Dirty Deeds Done Dirt Cheap)"
  },
  {
    name: "Yasuho Hirose",
    part: "JoJolion:",
    img: "images/hirose.jpeg",
    desc: "Yasuho Hirose, 2010’larda Japonya’da doğmuş, JoJolion döneminin önemli karakterlerinden biridir ve Josuke Higashikata’ya yardımcı olur. Neşeli, meraklı ve kararlı bir kişilik sergileyen Yasuho, Stand gücü Paisley Park ile yön bulma, bilgi toplama ve teknolojiyi manipüle etme yeteneklerini kullanır. Amacı, Josuke ve sevdiklerini korumak, gizemleri çözmek ve kasabadaki tehlikeleri önlemektir. Zamanla kendi cesareti ve zekâsıyla hikâyede kritik bir rol oynamış, Joestar soyunun müttefiklerinden biri hâline gelmiştir.",
    stand: "images/paisley_park.jpeg",
    standName: "Paisley Park"
  },
  {
    name: "Joseph Joestar",
    part: "Stardust Crusaders:",
    img: "images/joseph3.jpeg",
    desc: "Joseph Joestar, Stardust Crusaders döneminde artık yaşlanmış ama hâlâ zeki ve esprili bir kahramandır. Eskiden Hamon ustası olan Joseph, bu kez Stand gücü Hermit Purple’ı kullanarak fotoğraflar aracılığıyla uzak yerleri görebilir ve bilgi toplayabilir. Torunu Jotaro Kujo ile birlikte Mısır’a uzanan uzun bir yolculuğa çıkarak DIO’nun tehdidine son vermeyi amaçlar. Yaşına rağmen cesur ve stratejik düşünmeye devam eden Joseph, ekibin akıl hocası ve kalbi olarak önemli rol oynar. Deneyimi, zekâsı ve mizahıyla Joestar soyunun kararlılığını bir kez daha kanıtlamıştır.",
    stand: "images/hermit_purple.jpeg",
    standName: "Hermit Purple"
  },
  {
    name: "Jotaro Kujo",
    part: "Diamond is Unbreakable:",
    img: "images/jotaro4.jpeg",
    desc: "Jotaro Kujo, Diamond is Unbreakable döneminde deneyimli bir okyanus biyoloğu ve olgun bir savaşçıdır. Artık daha sakin ve bilge bir karaktere dönüşen Jotaro, genç Joestar nesline rehberlik ederken hâlâ Star Platinum’ın olağanüstü gücüne sahiptir. Morioh kasabasına giderek Josuke Higashikata ile tanışır ve DIO’nun kanından gelen yeni tehditleri araştırır. Eskisi kadar saldırgan olmayan Jotaro, mantığı, stratejisi ve liderliğiyle öne çıkar. Zamanı durdurma gücü sayesinde birçok kritik anda kahramanları kurtararak Joestar soyunun mirasını sürdürür.",
    stand: "images/star_platinum.jpeg",
    standName: "Star Platinum"
  },
  {
    name: "Jotaro Kujo",
    part: "Stone Ocean:",
    img: "images/jotaro6.jpeg",
    desc: "Jotaro Kujo, Stone Ocean döneminde artık olgun ve tecrübeli bir baba figürüdür. Kızı Jolyne Cujoh’u korumak ve DIO’nun mirasını sürdüren Rahip Enrico Pucci’yi durdurmak için yeniden sahneye çıkar. Stand’ı Star Platinum hâlâ inanılmaz hız ve güç sunarken, Jotaro’nun en büyük gücü artık kararlılığı ve fedakârlığıdır. Sert ve soğukkanlı tavrının ardında ailesine duyduğu derin sevgi yatan Jotaro, Jolyne’i kurtarmak uğruna hayatını riske atar. Stone Ocean boyunca trajik ama onurlu bir figür olarak Joestar soyunun cesaretini sonuna kadar temsil eder.",
    stand: "images/star_platinum.jpeg",
    standName: "Star Platinum"
  },
  {
    name: "Dio Brando",
    part: "Phantom Blood:",
    img: "images/dio1.jpeg",
    desc: "Dio Brando, Phantom Blood döneminin başantagonistidir ve Jonathan Joestar’ın en büyük rakibidir. Fakir bir geçmişten gelen Dio, hırsı ve kibriyle Joestar ailesine sızar, sonunda taş maskesini kullanarak vampir gücü kazanır. Bu güç sayesinde insanüstü hız, dayanıklılık ve yenilenme yeteneklerine ulaşır. Amacı, ölümsüzlükle birlikte dünyayı yönetmek ve Jonathan’ı tamamen yok etmektir. Soğukkanlı zekâsı, zalimliği ve karizmatik kötülüğüyle JoJo evreninin en unutulmaz düşmanlarından biri olmuş, Joestar soyuyla süren lanetin başlangıcını oluşturmuştur.",
    stand: "images/stone_mask.jpeg",
    standName: "Yok (Stone Mask Kullanıcısı)"
  },
  {
    name: "Lisa Lisa",
    part: "Battle Tendency:",
    img: "images/lisa_lisa.jpeg",
    desc: "Lisa Lisa, Battle Tendency döneminde güçlü bir Hamon ustası ve Joseph Joestar’ın annesidir. Gerçek adı Elizabeth Joestar olan Lisa Lisa, genç yaşta Ripple (Hamon) tekniğinde ustalaşarak insanlığın kadim düşmanları olan Pillar Men’e karşı savaşır. Zarif ama disiplinli bir kişiliğe sahip olan Lisa Lisa, öğrencilerine sert ama adil bir şekilde rehberlik eder. Hamon enerjisini mükemmel bir dengeyle kontrol edebilmesi, hem saldırı hem de savunmada olağanüstü yetenekler sergilemesini sağlar. Joseph’in eğitmeni ve ilham kaynağı olarak, Joestar soyunun gücünü ve kararlılığını temsil eden efsanevi bir figür hâline gelmiştir.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
    name: "Guido Mista",
    part: "Golden Wind:",
    img: "images/mista.jpeg",
    desc: "Guido Mista, Golden Wind döneminde Giorno Giovanna’nın ekibinde yer alan sadık bir müttefiktir. Neşeli, cesur ve biraz da batıl inançlı bir kişiliğe sahiptir; özellikle “4” sayısından uğursuzluk olarak korkar. Mista’nın Stand’ı Sex Pistols, altı küçük bilinçli kurşundan oluşur ve mermileri yönlendirerek hedefi zekice vurmasını sağlar. Silah kullanmadaki ustalığı ve stratejik zekâsıyla ekibin en güvenilir savaşçılarından biri olur. Giorno’ya olan sadakati ve güçlü iradesiyle Golden Wind boyunca dostluk, cesaret ve bağlılığın sembollerinden biri hâline gelmiştir.",
    stand: "images/sex_pistols.jpeg",
    standName: "Sex Pistols"
  },
  {
    name: "Diego Brando",
    part: "Steel Ball Run:",
    img: "images/diego.jpeg",
    desc: "Diego Brando, 1890’larda İngiltere’de doğmuş, Steel Ball Run döneminin başantagonistlerinden biridir ve alternate evrendeki Dio Brando’nun versiyonudur. Kurnaz, hırslı ve acımasız bir karakter olan Diego, hem yarışta hem de savaşta rakiplerini alt etmek için her yolu dener. Stand’ı The World ile zaman kontrolü ve yüksek hız-güç avantajı elde eder, böylece Johnny Joestar ve diğer yarışmacılara karşı üstünlük kurar. Diego, stratejik zekâsı ve bencilliğiyle Joestar soyunun karşısında en zorlu ve ölümcül rakiplerden biri hâline gelir.",
    stand: "images/theworld_au.jpeg",
    standName: "The World AU"
  },
  {
    name: "Norisuke Higashikata",
    part: "JoJolion:",
    img: "images/norisuke.jpeg",
    desc: "Norisuke Higashikata IV, 2000’lerde Japonya’da doğmuş, Jojolion döneminin önemli karakterlerinden biridir ve Higashikata ailesinin patriği olarak bilinir. Ailesine bağlı, kararlı ve koruyucu bir kişiliğe sahip olan Norisuke, kasabadaki toprak ve şirket işlerini yönetir. Olaylar geliştikçe ailesini ve sevdiklerini tehlikelerden korumak için stratejik kararlar alır ve Josuke Higashikata ile olan ilişkisi hikâyede kritik rol oynar. Sakin dış görünüşünün ardında, liderlik yeteneği ve kararlılığıyla Joestar mirasını sürdürür, kasabanın ve ailesinin güvenliğini garanti altına almaya çalışır.",
    stand: "images/king_nothing.jpeg",
    standName: "King Nothing"
  },
  {
    name: "Erina Pendleton",
    part: "Phantom Blood:",
    img: "images/erina.jpeg",
    desc: "Erina, Jonathan Joestar’ın çocukluk aşkı ve daha sonra eşi olan nazik, cesur bir kadındır.Dio’nun zulmüne rağmen onurunu ve nezaketini korumuş, Jonathan’a olan sevgisiyle onu her zaman desteklemiştir.Part 1’in sonunda, Jonathan’la gemideyken Dio’nun saldırısına tanık olur ama Jonathan’ın fedakarlığı sayesinde hayatta kalır.Jonathan’ın çocuğunu karnında taşıyarak kurtulur ve soyun devamını sağlar. Böylece Joestar ailesinin geleceği onunla sürer.",
    stand: "images/standless.jpeg",
    standName: "Yok"
  },
  {
    name: "Rudol von Stroheim",
    part: "Battle Tendency:",
    img: "images/stroheim.jpeg",
    desc: "Rudol von Stroheim, Battle Tendency döneminde Nazi subayı olarak ortaya çıkar ama zamanla Joseph Joestar’ın müttefiki hâline gelir. Cesur, disiplinli ve stratejik zekâsıyla öne çıkan Stroheim, Hamon enerjisini ustaca kullanır ve savaş sırasında düşmanlarına karşı üstünlük sağlar. Part 2’nin ilerleyen bölümlerinde ciddi yaralanmalar sonucu yarı-sibernetik bir bedene kavuşur; bu sayede güç, hız ve dayanıklılık kazanır. Stroheim, Hamon bilgisi ve teknolojik yetenekleriyle Pillar Men’e karşı verilen savaşta kritik bir rol oynar ve Joseph’in en güvenilir müttefiklerinden biri olur.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı ve Alman Teknolojisi)"
  },
  {
    name: "Noriaki Kakyoin",
    part: "Stardust Crusaders:",
    img: "images/kakyoin.jpeg",
    desc: "Noriaki Kakyoin, Stardust Crusaders döneminin önemli karakterlerinden biridir ve Jotaro Kujo’nun müttefikidir. Zeki, soğukkanlı ve sadık bir kişiliğe sahip olan Kakyoin, Stand gücü Hierophant Green ile uzun menzilli saldırılar yapabilir, düşmanlarını sarar ve stratejik avantaj sağlar. Japonya’dan Mısır’a uzanan DIO yolculuğunda Jotaro ve ekibine katılarak kritik savaşlarda rol oynar. Kakyoin, zekâsı, sadakati ve Stand kullanma yeteneğiyle ekibin vazgeçilmez bir üyesi hâline gelir ve Joestar soyunun düşmanlarına karşı mücadelesinde önemli bir katkı sunar.",
    stand: "images/hierophant.jpeg",
    standName: "Hierophant Green"
  },
  {
    name: "Okuyasu Nijimura",
    part: "Diamond is Unbreakable:",
    img: "images/okuyasu.jpeg",
    desc: "Okuyasu Nijimura, Diamond is Unbreakable döneminin önemli karakterlerinden biridir ve Josuke Higashikata’nın yakın arkadaşıdır. Sakin bir tavrı olsa da çoğu zaman saf ve komik bir kişilik sergiler; yine de cesur ve sadıktır. Stand gücü The Hand ile fiziksel alanı silerek objeleri veya düşmanları yok edebilir ve stratejik avantaj sağlar. Okuyasu, Josuke ile birlikte kasabayı korur ve Stand’ını yaratıcı şekilde kullanarak tehlikeleri bertaraf eder. Mizahi tavrı ve güçlü Stand’ı sayesinde ekibin vazgeçilmez bir üyesi hâline gelmiştir.",
    stand: "images/the_hand.jpeg",
    standName: "The Hand"
  },
  {
    name: "Narancia Ghirga",
    part: "Golden Wind:",
    img: "images/narancia.jpeg",
    desc: "Narancia Ghirga, Golden Wind döneminin önemli karakterlerinden biridir ve Bucciarati ekibinin genç üyelerindendir. Enerjik, sabırsız ve biraz da saf bir kişiliğe sahip olan Narancia, arkadaşlarına son derece bağlıdır. Stand’ı Aerosmith ile küçük ama ölümcül bir savaş uçağı kontrol eder; düşmanları tespit eder ve uzaktan yüksek hassasiyetle saldırılar yapar. Narancia, stratejik zekâsı ve cesaretiyle ekibe önemli katkılar sağlar, aksiyon ve çatışmalarda vazgeçilmez bir savaşçı hâline gelir.",
    stand: "images/aerosmith.jpeg",
    standName: "Aeromith"
  },
  {
    name: "DIO",
    part: "Stone Ocean:",
    img: "images/dio6.jpeg",
    desc: "DIO, Stone Ocean döneminde, Jonathan Joestar’ın düşmanı olarak başlayan serüveninden kalan mirasını Pucci üzerinden sürdürür. Ölümsüz vampir olarak yıllar boyunca etkisini devam ettirmiş, Part 3’te Star Platinum ve The World ile Joestar soyuna karşı savaşmış, sonra bedenini kaybetmiştir. Part 6’da DIO’nun etkisi, Enrico Pucci’nin planlarıyla yeniden hissedilir; karizması, acımasız zekâsı ve ölümcül stratejileri Joestar soyunun kahramanlarını zor durumda bırakır. DIO, taşkın hırsı ve mirasıyla, Part 6 boyunca Joestar soyunun mücadelesinde karmaşık ve ölümcül bir figür olmaya devam eder.",
    stand: "images/the_world.jpeg",
    standName: "The World"
  },
  {
    name: "Sandman",
    part: "Steel Ball Run:",
    img: "images/sandman.jpeg",
    desc: "Sandman, Steel Ball Run döneminde Güney Amerika kökenli bir savaşçı ve yarışmacıdır. Kendi kabilesi tarafından dışlanmasına rağmen, inançları ve özgürlük arayışı uğruna Steel Ball Run yarışına katılır. Stand kullanmaz; bunun yerine, inanılmaz hız, çeviklik ve doğa ile uyumlu savaş yeteneklerine sahiptir. Kumları ve çevresini ustaca kullanarak düşmanlarını alt eder, stratejik zekâsıyla dikkat çeker. Sandman, özgürlük ideali ve cesaretiyle Part 7’nin en karizmatik ve trajik karakterlerinden biri olarak öne çıkar.",
    stand: "images/standless.jpeg",
    standName: "Yok"
  },
  {
    name: "Daiya Higashikata",
    part: "JoJolion:",
    img: "images/daiya.jpeg",
    desc: "Daiya Higashikata, JoJolion döneminde Higashikata ailesinin genç üyelerinden biridir ve saf, duygusal bir kişiliğe sahiptir. Görme engeline rağmen çevresine karşı oldukça duyarlıdır ve Josuke’ye karşı samimi bir yakınlık hisseder. Stand’ı California King Bed, insanların anılarını çalma gücüne sahiptir; bu yetenek hem savunma hem de kontrol amaçlı kullanılabilir. Daiya, ailesine olan bağlılığı ve masum doğasıyla JoJolion’un dramatik yapısında duygusal bir denge oluşturur.",
    stand: "images/king_bed.jpeg",
    standName: "California King Bed"
  },
];

const container = document.querySelector(".character-container");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupDesc = document.getElementById("popup-desc");
const popupStand = document.getElementById("popup-stand");
const popupStandName = document.getElementById("popup-stand-name");
const closeBtn = document.querySelector(".close-btn");
const music = document.getElementById("bg-music");
const themeBtn = document.getElementById("theme-toggle");
const musicBtn = document.getElementById("music-toggle");

function displayCharacters(list) {
  container.innerHTML = "";

  // Part'lara göre gruplandır
  const parts = {};
  list.forEach((char) => {
    if (!parts[char.part]) parts[char.part] = [];
    parts[char.part].push(char);
  });

  // Her part için başlık ve kartları oluştur
  for (const [partName, chars] of Object.entries(parts)) {
    const partSection = document.createElement("div");
    partSection.classList.add("part-section");

    const title = document.createElement("h2");
    title.textContent = partName;
    partSection.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("character-grid");

    chars.forEach((char) => {
      const card = document.createElement("div");
      card.classList.add("character-card");
      card.innerHTML = `
        <img src="${char.img}" alt="${char.name}">
        <h3>${char.name}</h3>
      `;
      card.addEventListener("click", () => openPopup(char));
      grid.appendChild(card);
    });

    partSection.appendChild(grid);
    container.appendChild(partSection);
  }
}

function openPopup(char) {
  popup.classList.remove("hidden");
  popupImg.src = char.img;
  popupName.textContent = char.name;
  popupDesc.textContent = char.desc;
  popupStand.src = char.stand;
  popupStandName.textContent = `Stand: ${char.standName}`;
}

closeBtn.addEventListener("click", () => popup.classList.add("hidden"));

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.part.toLowerCase().includes(term)
  );
  displayCharacters(filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  displayCharacters(characters);
  music.volume = 0.1;
});

let isMusicPlaying = false;
musicBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    music.pause();
    musicBtn.textContent = "🎵 Müzik: Kapalı";
  } else {
    music.play().catch(() => console.log("Müzik başlatılamadı."));
    musicBtn.textContent = "🎵 Müzik: Açık";
  }
  isMusicPlaying = !isMusicPlaying;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("day");
  if (document.body.classList.contains("day")) {
    themeBtn.textContent = "🌙 Tema: Gündüz";
  } else {
    themeBtn.textContent = "🌞 Tema: Ay";
  }
});

