import React from 'react';
import {View, Colors, KeyboardAwareScrollView, Text, Button} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {useSelector} from 'react-redux';
import {usePush} from 'utils/hooks';

const Terms = ({page}) => {
    const {t} = useTranslation();
    const push = usePush();
    const lang = useSelector(state => state.auth.contactLang);

    let isRegister = page && page === 'register' ? true : false;
    let isOverlay = page && page === 'showOverlay' ? true : false;

    return (
        <View flex backgroundColor={Colors.white}>
            {isOverlay ? (
                <Header showCloseModal white title={t('Terms & Conditions')} />
            ) : (
                <Header showBack white title={t('Terms & Conditions')} />
            )}
            <KeyboardAwareScrollView>
                {lang == 'tr' || lang == 'TR' ? (
                    <>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            KULLANIM KOŞULLARI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> Platformuna Hoş Geldiniz!
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Üye kuruluşlarımı yüz binlerce müşteriyle buluşturan Kartonah; alıcılarımıza da nerede
                            olurlarsa olsunlar, en iyi ürünü en uygun fiyatla ulaştırmak için çalışıyoruz. Büyümeye ve
                            toptan e-ticareti büyütmeye devam ediyoruz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Ürünlerimizi ve hizmetlerimizi (“Hizmetler”) kullandığınız için teşekkür ederiz. Hizmetler{' '}
                            <Text bold>
                                Bahçelivler Mahallesi, Mehmetçik Sokak, Kadir Has Sitesi No:1/1 Kat:4, Daire:407
                                Bahçelievler, İstanbul PK:34180 adresinde mukim KARTONAH İTHALAT İHRACAT E-TİCARET
                                LİMİTED ŞİRKETİ
                            </Text>{' '}
                            tarafından sağlanır. (İşbu sözleşme kapsamında “Kartonah” veya “
                            <Text bold> www.kartonah.com</Text>” olarak anılacaktır)
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerimizi kullanarak, buradaki şartları kabul etmiş olursunuz. Lütfen bu şartları
                            dikkatlice okuyun.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerimiz çeşitli olduğundan bazen ek şartlar veya ürün gereksinimleri (yaş
                            gereksinimleri dahil) uygulanabilir. Ek şartlar ilgili Hizmetlerle birlikte sağlanır ve bu
                            Hizmetleri kullanmanız halinde bizimle yaptığınız sözleşmenin de birer parçası haline gelir.
                        </Text>
                        <Text text70 bold center margin-10 marginB-0 color={Colors.primary}>
                            HİZMETLERİN KULLANIMI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerin tarafınızca kullanımı <Text bold> www.kartonah.com</Text>’un onayına bağlı olup,
                            hizmetlere erişiminizi reddetme ve sınırlandırma hakkına sahiptir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetleri kullanabilmeniz için <Text bold>ww w.kartonah.com</Text> (“Site”) veya
                            Kartonah’ın fikri haklarına sahip olduğu mobil ve online ortamda çalışan ve bu kapsamda cep
                            telefonu, tablet, akıllı saat, bilgisayar ve benzeri Kartonah’ın uygulamaya açabileceği
                            teknolojik platformlarda çalışan<Text bold>Kartona h</Text> tarafından sunulması amaçlanan
                            hizmetlerin karşılanması için oluşturulan yazılım (“Mobil Uygulama”) üzerinden bir kullanıcı
                            adı ve şifre belirlemeniz gerekmektedir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kullanıcı adı ve şifrenin sizin tarafınızdan belirlenmesi, kullanıcı adı ile yapılacak her
                            türlü işlemden bizzat sizin sorumlu olmanızı sağlar. Aksi halde oluşacak veri kayıplarından
                            ve güvenlik ihlallerinden veya donanım ve cihazların zarar görmesinden Firma sorumlu
                            tutulamaz. Bu kapsamda kullanıcı adı ve şifrenizi gizli tutmakla ve üçüncü kişilerle
                            paylaşmamakla yükümlü olduğunuzu kabul etmektesiniz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kullanıcı, doğru, eksiksiz ve güncel kayıt bilgilerini vermek zorundadır. Aksi halde bu
                            Sözleşme ihlal edilmiş sayılacak ve Kullanıcı bilgilendirilmeksizin hesap
                            kapatılabilecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerin kullanımı esnasında tarafınızca verilen bilgilerde hata veya yanlışlık olması
                            durumunda Kartonah, tarafınızca verilen yanlış bilgiye dayanarak yapacağı işlemlerden
                            sorumlu olmayacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> tarafından sunulan hizmetlere
                            <Text bold> Kartonah</Text> tarafından belirlenen şekil dışında ve/veya yetkisiz şekilde
                            ulaşmamayı ve yazılımı hiçbir şekilde değiştirmemeyi, değiştirilmiş olduğu belli olanları
                            kullanmamayı ve anılan kurallara uymadığınız durumlarda Kartonah'ın doğrudan veya dolaylı
                            olarak uğrayabileceği tüm zararı karşılamayı taahhüt etmektesiniz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> sistemini veya ona bağlı olarak geliştirilen sistem ve
                            uygulamalarda yer alan hizmetleri kötüye kullanmayacağınızı ve bu sistemi kullanan diğer
                            kullanıcıların veya 3. Kişilerin haklarını ihlal eden nitelikte veya zarar veren hiçbir
                            davranışta bulunmayacağınızı ve söz konusu kötüye kullanım neticesinde Kartonah'in veya
                            ilgili kullanıcının veya 3. Kişinin uğrayabileceği tüm zararlardan sorumluluğun tamamen size
                            ait olduğunu ve böyle bir kullanımın tespit edilmesi halinde Kartonah'in sizin ilgili
                            hizmetteki hesabını ya da hesabının Kullanıcı Adı ve benzeri kısımlarını kapatma veya
                            limitleme veya
                            <Text bold> Kartonah</Text> üyeliğini sona erdirme hakkının bulunduğunu kabul etmektesiniz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> Uygulama ve Site üzerinden çeşitli ürün ve hizmetlerin tanıtım
                            ve reklamlarını yapabilir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> herhangi bir zamanda sistemin çalışmasını geçici bir süre askıya
                            alabilir veya tamamen durdurabilir. Böyle bir durumda Kartonah'in size veya üçüncü kişilere
                            karşı hiçbir sorumluluğu olmayacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, hizmetlerinin zamanında, güvenli ve hatasız olarak sunulmasını, hizmet
                            kullanımından elde edilen sonuçların doğru ve güvenilir olmasını, hizmet kalitesinin
                            beklentilere cevap vermesini sağlamak; Siteyi ve Mobil Uygulamayı kötü niyetli üçüncü
                            kişiler tarafından sisteme zarar vermek için yapabilecekleri siber saldırılardan korumak
                            için gerekli özeni gösterecektir ancak
                            <Text bold> Kartonah</Text> bunları kesin bir şekilde taahhüt etmemektedir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, sizin<Text bold> Kartonah</Text> sistemi dışındaki mobil uygulamalara ve web
                            sitelerine geçişinizi sağlayabilir. Bu takdirde geçiş yapacağınız sitelerin içeriğinden
                            Kartonah'in sorumlu olmadığını peşinen kabul etmektesiniz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerimizi kullanmanız size Hizmetlerimizdeki veya eriştiğiniz içerikteki hiçbir fikri
                            mülkiyet hakkının sahipliğini vermez. Bu şartlar, size Hizmetlerimizde yer alan marka
                            unsurlarını veya logoları kullanma hakkını vermez. Hizmetlerimizde veya Hizmetlerimizle
                            birlikte görüntülenen hiçbir yasal uyarıyı kaldırmayın, üzerini kapatmayın ve değiştirmeyin.
                            Kartonah sisteminde yer alan ünvan, işletme adı, marka, patent, logo, tasarım, bilgi ve
                            yöntem gibi tescilli veya tescilsiz tüm fikri mülkiyet hakları site işleteni ve sahibi
                            firmaya veya belirtilen ilgilisine ait olup, ulusal ve uluslararası hukukun koruması
                            altındadır. İşbu Site’nin ziyaret edilmesi veya bu Site’deki hizmetlerden yararlanılması söz
                            konusu fikri mülkiyet hakları konusunda hiçbir hak vermez. Site’de yer alan bilgiler hiçbir
                            şekilde çoğaltılamaz, yayınlanamaz, kopyalanamaz, sunulamaz ve/veya aktarılamaz. Site’nin
                            bütünü veya bir kısmı diğer bir internet sitesinde izinsiz olarak kullanılamaz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Hizmetlerimizi kullanmanızla bağlantılı olarak
                            <Text bold> Kartonah</Text> size hizmet duyuruları, yönetim amaçlı iletiler ve diğer
                            bilgileri gönderebilir. Bu iletişimlerden bazılarını devre dışı bırakmayı seçebilirsiniz.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Özellikle yargı ve sair yetkili resmi merci karar, direktif, emir ve uygulamaları, sair
                            mücbir sebepler (örneğin doğal afet, terörist saldırıları, yangın, sel, zelzele, grev,
                            lokavt vb.), üçüncü kişilerin sebep olduğu durumlar, internet bağlantı hizmeti sağlayan
                            kurum ve/veya kuruluşlardan kaynaklanan uzun süreli veya kısa süreli aksaklıklar,
                            eksiklikler, teknik arızalar ve/veya gecikmeler ve benzeri dış etkenler, yanlış ve hatalı
                            kullanım, Kartonah’dan kaynaklanabilecek uzun süreli veya kısa süreli teknik arıza ve sair
                            aksaklıklar, eksiklikler, gecikmeler, tamir çalışmaları veya diğer yönlendirmeler sonucu
                            meydana gelen sair bütün problemler de dâhil olmak üzere internet servis sağlayıcılardan
                            kaynaklanan geçici dahi olsa hizmet kesintilerinden, aksaklıklardan, arızalardan, diğer her
                            türlü teknik zorunluluklardan, bakım veya yenileme işlemlerinden, telefon şebekesinden, GSM
                            operatöründen, altyapı sağlayıcısından ve elektrik kesintilerinden dolayı Hizmet'in
                            verilmesinde yaşanabilecek aksaklıklardan ve problemlerden
                            <Text bold> Kartonah</Text> hiçbir surette sorumlu tutulamaz. Olası kesintiler veya başka
                            bir sebeple Üye'lerin iletişiminde, Hizmet'in sağlanmasında, Yazılım'ın çalışmasında ve/veya
                            İçerik'te oluşabilecek değişiklik, eksiklik, aksama, kopukluk, kesinti, yanlışlık, silinme
                            ve bozulmalar da dahil olmak üzere ve bunlarla sınırlı olmamak kaydıyla Kartonah
                            yaşanabilecek hiçbir problemden sorumlu değildir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, gerektiğinde ve kendi takdir yetkisine bağlı olarak ağın işletim güvenliğinin
                            tehlikede olması, ağa erişimin devamlılığı ve sürekliliği, ağda, yazılımda veya kayıtlı
                            dosyalarda meydana gelebilecek arızaların, bozulmaların, eksikliklerin ve sair her türlü
                            problemin önüne geçebilmek, muhtemel bütün aksaklıkları engellemek ve/veya etkisini azaltmak
                            adına ve gerekli gördüğü diğer durumlarda hizmete erişimi süreli veya süresiz, kısmen veya
                            tamamen sınırlandırabilir veya durdurabilir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kullanıcı/Üye,<Text bold> Kartonah</Text> tarafından sunulan Hizmet'in kullanımı sırasında
                            gerçek veya tüzel üçüncü kişilere zarar vermesi ve/veya bu kişilere karşı hukuka aykırı bir
                            fiil işlemesi halinde, söz konusu zarardan ve/veya hukuka aykırı fiilden bizzat sorumlu
                            olduğunu ve Kartonah’in tamamen sorumsuz olduğunu gayrikabili rücu olmak üzere kabul, beyan
                            ve taahhüt eder. Üçüncü şahıslarla ilgili olarak ortaya çıkabilecek ihtilaflarda; üçüncü
                            şahısların her türlü tazminat taleplerinde Kartonah’in herhangi bir şekilde sorumlu
                            tutulamayacağını, tutulması halinde de Kartonah’in katlanmak zorunda kalacağı her türlü
                            zarar ve masrafı Kartonah’in söz konusu zarar ve masrafın karşılanmasına ilişkin Üye’ye
                            göndereceği yazılı talepten sonra ivedilikle karşılayacağını Üye gayrikabili rücu olmak
                            üzere peşinen kabul, beyan ve taahhüt eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, dilediği zaman sunulan hizmetleri ve işbu sözleşme şartlarını kısmen veya tamamen
                            değiştirebilir. Değişiklikler yayınlandığı tarihten itibaren geçerli olacaktır.
                            Değişiklikleri takip etmek Kullanıcı’nın sorumluluğundadır. Kullanıcı, sunulan hizmetlerden
                            yararlanmaya devam etmekle bu değişiklikleri de kabul etmiş sayılır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah'in gizlilik politikaları, Hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl
                            ele aldığımızı ve gizliliğinizi nasıl koruduğumuzu açıklar. Hizmetlerimizi kullanarak,
                            Kartonah'ın bu verileri gizlilik politikasına uygun şekilde kullanabileceğini kabul etmiş
                            olursunuz.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            SÖZLEŞMENİN DEVRİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, bu sözleşmeyi bildirimsiz olarak istediği zaman kısmen veya bütünüyle
                            devredebilir. Ancak KULLANICI ve ÜYE bu sözleşmeyi veya herhangi bir kısmını başka bir
                            tarafa devredemez. Bu türden bir devir girişimi geçersizdir.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            UYGULANACAK HUKUK VE YETKİLİ MAHKEME VE İCRA DAİRELERİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            İşbu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Sözleşme’nin ifasından doğabilecek
                            her türlü uyuşmazlığın çözümünde İstanbul (Avrupa Yakası) Mahkeme ve İcra Müdürlükleri
                            yetkilidir
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            DELİL SÖZLEŞMESİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Taraflar arasında işbu sözleşme ile ilgili işlemler için çıkabilecek her türlü
                            uyuşmazlıklarda<Text bold>Kartonah </Text> defter, kayıt ve belgeleri ile ve bilgisayar
                            kayıtları ve e-posta kayıtları 6100 sayılı Hukuk Muhakemeleri Kanunu uyarınca delil olarak
                            kabul edilecek olup, kullanıcı bu kayıtlara itiraz etmeyeceğini kabul eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            İşbu sözleşme şartlarından biri, kısmen veya tamamen geçersiz hale gelirse, sözleşmenin geri
                            kalanı geçerliliğini korumaya devam eder.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            FESİH
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kullanıcı/ Üye hesabının kapatılmasını <Text bold>info@kartonah.com</Text> mail adresine
                            fesih bildirgesini göndererek gerçekleştirilebilir. Fesih zamanı kullanıcı hesabının
                            <Text bold> Kartonah</Text> tarafından de-aktive edilme anı olarak kabul edilecektir.
                        </Text>
                    </>
                ) : (
                    <>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            TERMS OF USE
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Welcome to<Text bold> Kartonah</Text> Platform!
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text>, bringing its member organizations together with hundreds of
                            thousands of customers; We strive to deliver the best product at the most affordable price
                            to our buyers wherever they are. We continue to grow and grow wholesale e-commerce.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Thank you for using our products and services ("Services"). Services are provided by{' '}
                            <Text bold>
                                KARTONAH İTHALAT İHRACAT E-TİCARET LİMİTED ŞİRKETİ domiciled at Bahçelivler Mahallesi,
                                Mehmetçik Sokak, Kadir Has Sitesi No:1/1 Kat:4, Daire:407 Bahçelievler, İstanbul
                                PK:34180
                            </Text>
                            . (Referred to as "Kartonah" or "<Text bold> www.kartonah.com</Text>" under this contract)
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            By using our services, you agree to the terms and conditions hereunder. Please read these
                            terms carefully.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Since our services are varied, additional terms or product requirements (including age
                            requirements) may sometimes be applied. Additional terms are provided with the respective
                            Services, and if you use these Services, such additional terms become part of the contract
                            that you made with us.
                        </Text>
                        <Text text70 bold center margin-10 marginB-0 color={Colors.primary}>
                            USE OF THE SERVICES
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The use of the services by you is subject to the approval of
                            <Text bold> www.Kartonah.com</Text> and it has the right to deny and limit your access to
                            the services.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In order to use the services, <Text bold>www.kartonah .com</Text> (the "Site") or by
                            Kartonah, which works in mobile and online environments where
                            <Text bold> Kartonah</Text> has intellectual rights and in this context, mobile phones,
                            tablets, smart watches, computers and similar technological platforms that
                            <Text bold> Kartonah</Text> can open to application. You need to set a username and password
                            through the software ("Mobile Application") created to meet the services intended to be
                            offered.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Setting the username and password by you allows you to be personally responsible for any
                            actions to be taken under such username. The Company cannot be held responsible for data
                            loss and security breaches or damage to hardware and devices. In this context, you accept
                            that you are responsible for keeping your username and password secret and not sharing them
                            with third parties.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The registration information of a user must be accurate, complete and up-to-date. Otherwise,
                            this Agreement will be deemed to be violated and the account may be closed without notice.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In case there is any mistake or misinformation in the information provided by you during the
                            use of the Services,
                            <Text bold> Kartonah</Text> will not be responsible for the transactions that it will
                            perform based on the wrong information provided by you.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            You undertake not to access to the Services offered by
                            <Text bold> Kartonah</Text> in any manner outside of the form specified by
                            <Text bold> Kartonah</Text> and/or in an unauthorized manner, not to modify the software in
                            any way, not to use the ones, which it is obvious that they have been modified, and to
                            compensate for any damage that<Text bold> Kartonah</Text> may suffer directly or indirectly
                            in the cases where you did not comply with the said rules.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            You acknowledge that you will not misuse Kartonah's system or the services included in the
                            systems and applications developed accordingly, and that you will not act in any way that
                            violates or harms the rights of other users or third parties using this system, and as a
                            result of such misuse, you will be responsible for any damage, which may be suffered by
                            Kartonah, any related user or third party, and if such misuse is detected,
                            <Text bold> Kartonah</Text> has right to close or limit your account or the username or
                            similar parts of your account in the related service or to terminate your
                            <Text bold> Kartonah</Text> membership.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> can promote and advertise various products and services through
                            the Application and Web Site.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> can temporarily suspend or stop the operation of the system at
                            any time. In such a case,
                            <Text bold> Kartonah</Text> will have no liability to you or third parties.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> shall exercise due diligence in order to ensure its services are
                            provided in a timely and correct manner, to ensure the service quality meets the
                            expectations, to protect the Web Site and mobile application from any cyber-attacks that may
                            be done by malicious third parties to damage the system, however,
                            <Text bold> Kartonah</Text> doesn't undertake them strictly.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> can transfer you to mobile applications and websites outside of
                            the
                            <Text bold> Kartonah</Text> system. In this case, you agree in advance that
                            <Text bold> Kartonah</Text> is not responsible for the content of the sites you will be
                            transferred to.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Your use of our Services does not give you ownership of any intellectual property rights in
                            our Services or the content you have accessed. These terms do not give you the right to use
                            brand elements or logos in our Services. Do not remove, cover, or change any legal notice
                            that displayed with or on our Services. All registered or unregistered intellectual property
                            rights, such as title, business name, trademark, patent, logo, design, information, and
                            method included in<Text bold>Kar tonah</Text> System, belong to the site operator and owner
                            company or the person concerned and are under the protection of national and international
                            law. Visiting or making use of the services of this Site does not grant any rights to such
                            intellectual property rights. The information provided on the Web Site cannot be reproduced,
                            published, copied, presented and/or transmitted by any means. All or part of the Web Site
                            may not be used without permission on another website.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In connection with your use of our services,
                            <Text bold> Kartonah</Text> may send you service announcements, administrative messages, and
                            other information. You can choose to disable some of these communications.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> cannot be held responsible in any way whatsoever for especially
                            the decisions, directives, orders and applications of judicial and other official
                            authorities, other force majeure (for example acts of god, terrorist attacks, fire, flood,
                            earthquake, strike and lockout etc.), the situations caused by third parties, short term and
                            long term interruptions, deficiencies, technical breakdowns and/or delays and external
                            factors arising from the institutions, Long-term or short-term technical malfunctions,
                            deficiencies, delays that may be caused by
                            <Text bold> Kartonah</Text> and/or organizations providing internet connection services, any
                            misuse or wrong use, any service interruptions, malfunctions, breakdowns arising from
                            internet service providers including all problems arising out any short term or long term
                            technical breakdowns or other malfunctions, deficiencies, delays, failures, repair works or
                            other directions from Kartonah, any failures or breakdowns that may be experienced in
                            service provision due to any other technical difficulties, maintenance or refurbishment
                            activities, telephone lines, GMS operators, infrastructure providers and electric cuts.
                            <Text bold> Kartonah</Text> shall not be responsible for any problem that may be experienced
                            including, but not limited to, any changes, interruptions, deficiencies, disruptions,
                            inaccuracies, deletions and breakdowns that may occur in the communication of the Members,
                            the provision of the Service, the operation of the Software and / or the Content due to
                            possible interruptions or any other reason.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah, when necessary and depending on its discretion, can restrict or stop access to the
                            system partly or completely for a limited or unlimited time in case the operational security
                            of the network is in danger, in order to maintain continuity of the access to the network,
                            to prevent any malfunction, breakdown, deficiency and any other problem in the network,
                            software or recorded files, to prevent any possible interruptions and/or diminish their
                            effects and in other situations that it deems necessary.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The User/Member irrevocably agrees, acknowledges and commits that he/she will be responsible
                            for such damage and/or unlawful action and<Text bold> Kartonah</Text> shall have no
                            responsibility in the event that the member causes any damage to legal and real third
                            parties and/or acts illegally against real or legal third parties during the use of the
                            Service offered by Kartonah. In disputes that may arise regarding third parties; the member
                            irrevocably agrees, acknowledges and commits tha<Text bold> Kartonah</Text> shall not be
                            held responsible for compensation claims of third parties, in case it is held responsible,
                            the Member shall meet any damages and costs that<Text bold> Kartonah</Text> had to incur
                            immediately upon written request of
                            <Text bold> Kartonah</Text> related to reimbursement of said damage and cost.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> can change the provided services and the terms of this contract
                            partially or completely at any time. Changes will be effective from their issuance date. It
                            is the User's responsibility to become aware of such changes. If the user continues using
                            the services offered by the site, s/he is deemed to have accepted these changes.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kartonah's privacy policies explain how we handle your personal data when you use our
                            Services and how we protect your privacy. By using our services, you agree that
                            <Text bold> Kartonah</Text> may use this data in accordance with its privacy policy.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            TRANSFER OF THE CONTRACT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            <Text bold> Kartonah</Text> may transfer this agreement partially or completely at any time
                            without notice. However, the USER and MEMBER cannot transfer this contract or any part of it
                            to another party. Such a transfer attempt is invalid.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            APPLICABLE LAW, COMPETENT COURT, AND ENFORCEMENT OFFICES
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            This Agreement is governed by the laws of the Republic of Turkey. In the resolution of any
                            dispute that may arise from the performance of the Contract, İstanbul (Europe Side) Courts
                            and Enforcement Offices are authorized.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            EVIDENTIAL AGREEMENT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In all kinds of disputes that may arise between the parties for transactions related to this
                            contract Kartonah's Books, records and documents, and computer records and e-mail records
                            will be accepted as evidence in accordance with the Law No. 6100 on Civil Procedures, and
                            the user agrees not to object to these records.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            If one of these contractual terms becomes partially or completely invalid, the remainder of
                            the contract remains valid.
                        </Text>
                        <Text text70 bold center color={Colors.primary} margin-10 marginB-0>
                            TERMINATION
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            User/Member account can be closed by sending a termination notice to{' '}
                            <Text bold>info@kartonah.com</Text> e-mail address. The termination time will be considered
                            as the moment when the user account is de-activated by Kartonah.
                        </Text>
                    </>
                )}
            </KeyboardAwareScrollView>

            {isRegister && (
                <Button
                    margin-20
                    marginB-40
                    marginV-40
                    fullWidth
                    color={Colors.secondary}
                    onPress={() => push('Kartonah.Screens.Register')}
                    backgroundColor={Colors.primary}
                    style={styles.button}>
                    <Text btnText>{t('Accept and continue')}</Text>
                </Button>
            )}
        </View>
    );
};

Terms.screenName = 'Kartonah.Screens.Terms';

Terms.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Terms;
