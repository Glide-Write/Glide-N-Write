export type LanguageType = 'en' | 'tr' | 'fi' | 'es' | 'zh' | 'hi' | 'ar' | 'bn' | 'ru' | 'pt' | 'fr' | 'de';

export const translations: Record<LanguageType, any> = {
  en: {
    menu: { title: "Menu", talkEntry: "Talk", configs: "Configurations", settings: "Settings", about: "About" },
    header: { step: "Step", glide: "Glide", talkOn: "Talk On", entryOn: "Entry On" },
    settings: { appearance: "Appearance (Themes)", themes: { bone: "Bone", boneDesc: "Warm Light", oatmeal: "Oatmeal", oatmealDesc: "Cozy Editorial", slate: "Slate", slateDesc: "Cool Gray", sage: "Sage", sageDesc: "Botanic Light", charcoal: "Charcoal", charcoalDesc: "Soft Dark", midnight: "Midnight", midnightDesc: "Deep Navy" }, quickSymbols: "Quick Symbols", reset: "Reset", done: "Done", edit: "Edit", uiLanguage: "UI Language" },
    configs: { editMapped: "Edit mapped sequences", typeWord: "Type word...", configTitle: "Configuration Title", description: "Description...", createNew: "Create New Configuration" },
    main: { drafting: "Drafting...", existing: "Existing:", mapping: "Mapping" },
    bottomBar: { clear: "Clear", undo: "Undo", type: "Type", speak: "Speak" },
    modal: { mapAction: "Map Action", enterWord: "Enter Word", typeYourWord: "Type your word...", cancel: "Cancel", save: "Save" }
  },
  tr: {
    menu: { title: "Menü", talkEntry: "Konuş", configs: "Yapılandırmalar", settings: "Ayarlar", about: "Hakkında" },
    header: { step: "Adım", glide: "Kaydırma", talkOn: "Konuşma Açık", entryOn: "Giriş Açık" },
    settings: { appearance: "Görünüm (Temalar)", themes: { bone: "Kemik", boneDesc: "Sıcak Işık", oatmeal: "Yulaf", oatmealDesc: "Rahat Editöryal", slate: "Arduvaz", slateDesc: "Soğuk Gri", sage: "Adaçayı", sageDesc: "Botanik Işık", charcoal: "Kömür", charcoalDesc: "Yumuşak Karanlık", midnight: "Gece Yarısı", midnightDesc: "Derin Lacivert" }, quickSymbols: "Hızlı Semboller", reset: "Sıfırla", done: "Bitti", edit: "Düzenle", uiLanguage: "Arayüz Dili" },
    configs: { editMapped: "Eşlenen dizileri düzenle", typeWord: "Kelime yaz...", configTitle: "Yapılandırma Başlığı", description: "Açıklama...", createNew: "Yeni Yapılandırma Oluştur" },
    main: { drafting: "Taslak...", existing: "Mevcut:", mapping: "Eşleniyor" },
    bottomBar: { clear: "Temizle", undo: "Geri Al", type: "Yaz", speak: "Konuş" },
    modal: { mapAction: "Eylemi Eşle", enterWord: "Kelime Gir", typeYourWord: "Kelimenizi yazın...", cancel: "İptal", save: "Kaydet" }
  },
  fi: {
    menu: { title: "Valikko", talkEntry: "Puhu", configs: "Asetukset", settings: "Asetukset", about: "Tietoja" },
    header: { step: "Vaihe", glide: "Liuku", talkOn: "Puhuminen Päällä", entryOn: "Syöttö Päällä" },
    settings: { appearance: "Ulkonäkö (Teemat)", themes: { bone: "Luu", boneDesc: "Lämmin Valo", oatmeal: "Kaurapuuro", oatmealDesc: "Kotoisa", slate: "Liuskekivi", slateDesc: "Viileä Harmaa", sage: "Salvia", sageDesc: "Kasvitieteellinen Valo", charcoal: "Hiili", charcoalDesc: "Pehmeä Tumma", midnight: "Keskiyö", midnightDesc: "Syvä Laivastonsininen" }, quickSymbols: "Pikasymbolit", reset: "Nollaa", done: "Valmis", edit: "Muokkaa", uiLanguage: "Käyttöliittymän kieli" },
    configs: { editMapped: "Muokkaa kartoitettuja sekvenssejä", typeWord: "Kirjoita sana...", configTitle: "Asetuksen Otsikko", description: "Kuvaus...", createNew: "Luo Uusi Asetus" },
    main: { drafting: "Luonnos...", existing: "Nykyinen:", mapping: "Kartoitus" },
    bottomBar: { clear: "Tyhjennä", undo: "Kumoa", type: "Kirjoita", speak: "Puhu" },
    modal: { mapAction: "Kartoita Toiminto", enterWord: "Syötä Sana", typeYourWord: "Kirjoita sanasi...", cancel: "Peruuta", save: "Tallenna" }
  },
  es: {
    menu: { title: "Menú", talkEntry: "Hablar", configs: "Configuraciones", settings: "Ajustes", about: "Acerca de" },
    header: { step: "Paso", glide: "Deslizamiento", talkOn: "Hablar Activo", entryOn: "Entrada Activa" },
    settings: { appearance: "Apariencia (Temas)", themes: { bone: "Hueso", boneDesc: "Luz Cálida", oatmeal: "Avena", oatmealDesc: "Editorial Acogedor", slate: "Pizarra", slateDesc: "Gris Frío", sage: "Salvia", sageDesc: "Luz Botánica", charcoal: "Carbón", charcoalDesc: "Oscuro Suave", midnight: "Medianoche", midnightDesc: "Azul Marino" }, quickSymbols: "Símbolos Rápidos", reset: "Restablecer", done: "Hecho", edit: "Editar", uiLanguage: "Idioma de la Interfaz" },
    configs: { editMapped: "Editar secuencias mapeadas", typeWord: "Escribir palabra...", configTitle: "Título de Configuración", description: "Descripción...", createNew: "Crear Nueva Configuración" },
    main: { drafting: "Borrador...", existing: "Existente:", mapping: "Mapeando" },
    bottomBar: { clear: "Borrar", undo: "Deshacer", type: "Escribir", speak: "Hablar" },
    modal: { mapAction: "Mapear Acción", enterWord: "Ingresar Palabra", typeYourWord: "Escribe tu palabra...", cancel: "Cancelar", save: "Guardar" }
  },
  zh: {
    menu: { title: "菜单", talkEntry: "说话", configs: "配置", settings: "设置", about: "关于" },
    header: { step: "分步", glide: "滑动", talkOn: "说话开启", entryOn: "输入开启" },
    settings: { appearance: "外观 (主题)", themes: { bone: "骨白", boneDesc: "暖光", oatmeal: "燕麦", oatmealDesc: "舒适", slate: "板岩", slateDesc: "冷灰", sage: "鼠尾草", sageDesc: "植物光", charcoal: "炭黑", charcoalDesc: "柔和暗色", midnight: "午夜", midnightDesc: "深海蓝" }, quickSymbols: "快捷符号", reset: "重置", done: "完成", edit: "编辑", uiLanguage: "界面语言" },
    configs: { editMapped: "编辑映射的序列", typeWord: "输入词语...", configTitle: "配置标题", description: "描述...", createNew: "创建新配置" },
    main: { drafting: "起草中...", existing: "现有的:", mapping: "映射中" },
    bottomBar: { clear: "清除", undo: "撤销", type: "输入", speak: "说话" },
    modal: { mapAction: "映射操作", enterWord: "输入词语", typeYourWord: "输入你的词语...", cancel: "取消", save: "保存" }
  },
  hi: {
    menu: { title: "मेनू", talkEntry: "बातचीत", configs: "विन्यास", settings: "सेटिंग्स", about: "के बारे में" },
    header: { step: "कदम", glide: "सरकना", talkOn: "बातचीत चालू", entryOn: "प्रवेश चालू" },
    settings: { appearance: "दिखावट (थीम्स)", themes: { bone: "हड्डी", boneDesc: "गर्म रोशनी", oatmeal: "दलिया", oatmealDesc: "आरामदायक", slate: "स्लेट", slateDesc: "ठंडा ग्रे", sage: "ऋषि", sageDesc: "वानस्पतिक रोशनी", charcoal: "कोयला", charcoalDesc: "नरम गहरा", midnight: "आधी रात", midnightDesc: "गहरा नेवी" }, quickSymbols: "त्वरित प्रतीक", reset: "रीसेट", done: "हो गया", edit: "संपादित करें", uiLanguage: "यूआई भाषा" },
    configs: { editMapped: "मैप किए गए अनुक्रमों को संपादित करें", typeWord: "शब्द टाइप करें...", configTitle: "विन्यास शीर्षक", description: "विवरण...", createNew: "नया विन्यास बनाएँ" },
    main: { drafting: "मसौदा तैयार किया जा रहा है...", existing: "मौजूदा:", mapping: "मैपिंग" },
    bottomBar: { clear: "साफ़ करें", undo: "पूर्ववत करें", type: "टाइप करें", speak: "बोलें" },
    modal: { mapAction: "क्रिया मैप करें", enterWord: "शब्द दर्ज करें", typeYourWord: "अपना शब्द टाइप करें...", cancel: "रद्द करें", save: "सहेजें" }
  },
  ar: {
    menu: { title: "القائمة", talkEntry: "تحدث", configs: "التكوينات", settings: "الإعدادات", about: "حول" },
    header: { step: "خطوة", glide: "انزلاق", talkOn: "التحدث مفعل", entryOn: "الإدخال مفعل" },
    settings: { appearance: "المظهر (السمات)", themes: { bone: "عظم", boneDesc: "ضوء دافئ", oatmeal: "شوفان", oatmealDesc: "مريح", slate: "لوح", slateDesc: "رمادي بارد", sage: "مريمية", sageDesc: "ضوء نباتي", charcoal: "فحم", charcoalDesc: "داكن ناعم", midnight: "منتصف الليل", midnightDesc: "كحلي عميق" }, quickSymbols: "رموز سريعة", reset: "إعادة تعيين", done: "تم", edit: "تعديل", uiLanguage: "لغة الواجهة" },
    configs: { editMapped: "تعديل التسلسلات المعينة", typeWord: "اكتب كلمة...", configTitle: "عنوان التكوين", description: "وصف...", createNew: "إنشاء تكوين جديد" },
    main: { drafting: "صياغة...", existing: "حالي:", mapping: "تعيين" },
    bottomBar: { clear: "مسح", undo: "تراجع", type: "كتابة", speak: "تحدث" },
    modal: { mapAction: "تعيين الإجراء", enterWord: "أدخل كلمة", typeYourWord: "اكتب كلمتك...", cancel: "إلغاء", save: "حفظ" }
  },
  bn: {
    menu: { title: "মেনু", talkEntry: "কথা", configs: "কনফিগারেশন", settings: "সেটিংস", about: "সম্পর্কে" },
    header: { step: "ধাপ", glide: "স্লাইড", talkOn: "কথা চালু", entryOn: "এন্ট্রি চালু" },
    settings: { appearance: "উপস্থিতি (থিম)", themes: { bone: "হাড়", boneDesc: "উষ্ণ আলো", oatmeal: "ওটমিল", oatmealDesc: "আরামদায়ক", slate: "স্লেট", slateDesc: "শীতল ধূসর", sage: "ঋষি", sageDesc: "বোটানিক আলো", charcoal: "কয়লা", charcoalDesc: "নরম অন্ধকার", midnight: "মধ্যরাত", midnightDesc: "গভীর নেভি" }, quickSymbols: "দ্রুত প্রতীক", reset: "রিসেট", done: "সম্পন্ন", edit: "সম্পাদনা", uiLanguage: "ইউআই ভাষা" },
    configs: { editMapped: "ম্যাপ করা ক্রম সম্পাদনা করুন", typeWord: "শব্দ টাইপ করুন...", configTitle: "কনফিগারেশন শিরোনাম", description: "বিবরণ...", createNew: "নতুন কনফিগারেশন তৈরি করুন" },
    main: { drafting: "খসড়া করা হচ্ছে...", existing: "বিদ্যমান:", mapping: "ম্যাপিং" },
    bottomBar: { clear: "পরিষ্কার করুন", undo: "পূর্বাবস্থায় ফেরান", type: "টাইপ করুন", speak: "কথা বলুন" },
    modal: { mapAction: "ম্যাপ অ্যাকশন", enterWord: "শব্দ লিখুন", typeYourWord: "আপনার শব্দ টাইপ করুন...", cancel: "বাতিল করুন", save: "সংরক্ষণ করুন" }
  },
  ru: {
    menu: { title: "Меню", talkEntry: "Разговор", configs: "Конфигурации", settings: "Настройки", about: "О приложении" },
    header: { step: "Шаг", glide: "Скольжение", talkOn: "Разговор Вкл.", entryOn: "Ввод Вкл." },
    settings: { appearance: "Внешний вид (Темы)", themes: { bone: "Кость", boneDesc: "Теплый Свет", oatmeal: "Овсянка", oatmealDesc: "Уютный", slate: "Сланец", slateDesc: "Холодный Серый", sage: "Шалфей", sageDesc: "Ботанический Свет", charcoal: "Уголь", charcoalDesc: "Мягкий Темный", midnight: "Полночь", midnightDesc: "Глубокий Синий" }, quickSymbols: "Быстрые символы", reset: "Сброс", done: "Готово", edit: "Изменить", uiLanguage: "Язык интерфейса" },
    configs: { editMapped: "Изменить назначенные последовательности", typeWord: "Введите слово...", configTitle: "Название конфигурации", description: "Описание...", createNew: "Создать новую конфигурацию" },
    main: { drafting: "Черновик...", existing: "Существующий:", mapping: "Назначение" },
    bottomBar: { clear: "Очистить", undo: "Отменить", type: "Ввод", speak: "Озвучить" },
    modal: { mapAction: "Назначить действие", enterWord: "Введите слово", typeYourWord: "Введите ваше слово...", cancel: "Отмена", save: "Сохранить" }
  },
  pt: {
    menu: { title: "Menu", talkEntry: "Falar", configs: "Configurações", settings: "Ajustes", about: "Sobre" },
    header: { step: "Passo", glide: "Deslizar", talkOn: "Falar Ativo", entryOn: "Entrada Ativa" },
    settings: { appearance: "Aparência (Temas)", themes: { bone: "Osso", boneDesc: "Luz Quente", oatmeal: "Aveia", oatmealDesc: "Aconchegante", slate: "Ardósia", slateDesc: "Cinza Frio", sage: "Sálvia", sageDesc: "Luz Botânica", charcoal: "Carvão", charcoalDesc: "Escuro Suave", midnight: "Meia-noite", midnightDesc: "Azul Marinho" }, quickSymbols: "Símbolos Rápidos", reset: "Redefinir", done: "Concluído", edit: "Editar", uiLanguage: "Idioma da Interface" },
    configs: { editMapped: "Editar sequências mapeadas", typeWord: "Digite a palavra...", configTitle: "Título da Configuração", description: "Descrição...", createNew: "Criar Nova Configuração" },
    main: { drafting: "Rascunho...", existing: "Existente:", mapping: "Mapeando" },
    bottomBar: { clear: "Limpar", undo: "Desfazer", type: "Digitar", speak: "Falar" },
    modal: { mapAction: "Mapear Ação", enterWord: "Inserir Palavra", typeYourWord: "Digite sua palavra...", cancel: "Cancelar", save: "Salvar" }
  },
  fr: {
    menu: { title: "Menu", talkEntry: "Parler", configs: "Configurations", settings: "Paramètres", about: "À propos" },
    header: { step: "Étape", glide: "Glisser", talkOn: "Parler Activé", entryOn: "Saisie Activée" },
    settings: { appearance: "Apparence (Thèmes)", themes: { bone: "Os", boneDesc: "Lumière Chaude", oatmeal: "Avoine", oatmealDesc: "Confortable", slate: "Ardoise", slateDesc: "Gris Froid", sage: "Sauge", sageDesc: "Lumière Botanique", charcoal: "Charbon", charcoalDesc: "Sombre Doux", midnight: "Minuit", midnightDesc: "Bleu Marine" }, quickSymbols: "Symboles Rapides", reset: "Réinitialiser", done: "Terminé", edit: "Modifier", uiLanguage: "Langue de l'interface" },
    configs: { editMapped: "Modifier les séquences mappées", typeWord: "Tapez le mot...", configTitle: "Titre de Configuration", description: "Description...", createNew: "Créer une Nouvelle Configuration" },
    main: { drafting: "Brouillon...", existing: "Existant:", mapping: "Mappage" },
    bottomBar: { clear: "Effacer", undo: "Annuler", type: "Taper", speak: "Parler" },
    modal: { mapAction: "Mapper l'action", enterWord: "Entrer le mot", typeYourWord: "Tapez votre mot...", cancel: "Annuler", save: "Enregistrer" }
  },
  de: {
    menu: { title: "Menü", talkEntry: "Sprechen", configs: "Konfigurationen", settings: "Einstellungen", about: "Über" },
    header: { step: "Schritt", glide: "Gleiten", talkOn: "Sprechen Ein", entryOn: "Eingabe Ein" },
    settings: { appearance: "Erscheinungsbild (Themes)", themes: { bone: "Knochen", boneDesc: "Warmes Licht", oatmeal: "Haferflocken", oatmealDesc: "Gemütlich", slate: "Schiefer", slateDesc: "Kühles Grau", sage: "Salbei", sageDesc: "Botanisches Licht", charcoal: "Holzkohle", charcoalDesc: "Sanftes Dunkel", midnight: "Mitternacht", midnightDesc: "Tiefes Marineblau" }, quickSymbols: "Schnellsymbole", reset: "Zurücksetzen", done: "Fertig", edit: "Bearbeiten", uiLanguage: "Benutzeroberflächensprache" },
    configs: { editMapped: "Zugeordnete Sequenzen bearbeiten", typeWord: "Wort tippen...", configTitle: "Konfigurationstitel", description: "Beschreibung...", createNew: "Neue Konfiguration erstellen" },
    main: { drafting: "Entwurf...", existing: "Vorhanden:", mapping: "Zuordnung" },
    bottomBar: { clear: "Löschen", undo: "Rückgängig", type: "Tippen", speak: "Sprechen" },
    modal: { mapAction: "Aktion zuordnen", enterWord: "Wort eingeben", typeYourWord: "Geben Sie Ihr Wort ein...", cancel: "Abbrechen", save: "Speichern" }
  }
};
