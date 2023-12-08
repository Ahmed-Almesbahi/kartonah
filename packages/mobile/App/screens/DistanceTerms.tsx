import React from 'react';
import {View, Colors, KeyboardAwareScrollView, Text, Button} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {useSelector} from 'react-redux';
import {usePush} from 'utils/hooks';

const DistanceTerms = ({page}) => {
    const {t} = useTranslation();
    const push = usePush();
    const lang = useSelector(state => state.auth.contactLang);

    let isRegister = page && page === 'register' ? true : false;
    let isOverlay = page && page === 'showOverlay' ? true : false;

    return (
        <View flex backgroundColor={Colors.white}>
            {isOverlay ? (
                <Header showCloseModal white title={t('Distance sales managment')} />
            ) : (
                <Header showBack white title={t('Distance sales managment')} />
            )}
            <KeyboardAwareScrollView>
                {lang == 'tr' || lang == 'TR' ? (
                    <>
                        <Text text90 margin-10 marginB-0>
                            Bu mesafeli satış sözleşmesi (bu "Sözleşme" veya bu "Kişisel Verilerin Korunması ve Mesafeli
                            Satış Sözleşmesi") XX.XX.XXXX tarihinden itibaren yürürlüğe girmiştir.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            1. TANIMLAMALAR
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.1 SATICI / HİZMET SAĞLAYICI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            KARTONAH İTHALAT İHRACAT E-TİCARET LİMİTED ŞİRKETİ ("Hizmet Sağlayıcı)", "SP", ‘’KARTONAH’’)
                            ticari olarak aktif olup aşağıdaki şekilde kayıt olur.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Ticaret Odası Sicil No: 187729-5,
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Kayıtlı Adres: Bahçelievler Mahallesi, Mehmetçik Sokak, Kadir Has Sitesi, No:1/1 Kat:4
                            Daire:407 Bahçelievler, İstanbul, Türkiye
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adres Kodu: 2701340768
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Kayıtlı Vergi Dairesi: Bahçelievler
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Kayıtlı Vergi Numarası: 5261410944
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Veb Sayfası: www.kartonah.com
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            E-posta: info@kartonah.com
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telefon Numarası: +90 212 852 18 01
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.2 ALICI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ABCDE KLMNO ("ALICI", "A") KARTONAH tarafından Site ‘de satışa sunulan mal ve / veya
                            hizmetleri satın alan, bilgileri aşağıda bulunan gerçek ya da tüzel kişidir.
                        </Text>
                        <Text text90 marginH-10 marginB-0 bold style={{textDecorationLine: 'underline'}}>
                            Gerçek Kişi: :
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Adı:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Soyadı:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Milliyeti:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            İkamet Ettiği Ülke:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Türkiye ID No: (Eğer Türkiye’ de ikameti varsa)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Vatandaşı Olduğu ülke ID No: (Eğer yabancı ise)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Doğum Tarihi:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Doğum Yeri:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Pasaport No: (Eğer yabancı ise){' '}
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adres:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            E-posta:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telefon Numarası:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Mezuniyet / Meslek:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Tüzel Kişi:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Satın Alan Kişi Adı:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Satın Alan Kişi Soyadı:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Şirketin Kurulu Olduğu Ülke:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Şirketin Vergi Numarası:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Şirket Kuruluş Tarihi: (Opsiyonel)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Email:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telephone Numarası:
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.3 ÜRÜN SATICI / ÜRETİCİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ALICIya ürün sağlayan ve işbu Mesafeli Satış Sözleşmesinde belirtilen koşullar altında
                            karşılıklı mutabık kalınan ödemeden yararlanan gerçek veya tüzel kişi.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adı: :
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adresi:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adres Kodu:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Vergi Dairesi:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Vergi Numarası:
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.4 İNTERNET SİTESİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            SATICI / SERVİS SAĞLAYICI’nın alan adı https://kartonah.com/ ve bu alan adıyla bağlantılı
                            alt alan adlarının internet sitelerini ifade eder, bu da ALICI’ların KARTONAH tarafından
                            belirtilen satış fiyatından satışa sunulan ürünleri satın almalarına olanak tanır.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.5 ÜRÜN
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            İnternet sitesine KARTONAH tarafından satışa arz edilen her türlü ticari maldır.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.6 ÜYELİK ANLAŞMASI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Web sitesi üzerinden sipariş verme imkanı sağlayan ALICInın onayladığı üyelik sözleşmesini
                            ifade eder.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.7 ÖDEME KORUMA SİSTEMİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ALICI’nın ve ÜRÜNLERİN SATICISI/ÜRETİCİnin riskini minimize etmek için, KARTONAH'ın ürün
                            ödemelerini üretici adına ALICI'dan tahsil etmesi ve ÜRÜNLERİN SATICISI/ÜRETİCİden ALICIya
                            mutabık kalınan standartlara göre sevkiyat gerçekleştiği zaman ÜRÜNLERİN
                            SATICISI/ÜRETİCİsine ödeme yapılması sistematiğini ifade eder.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            2. SÖZLEŞMENİN KONUSU
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            2.1 Bu sözleşmenin konusu; ALICI’nın KARTONAH’a ait internet sitesinden elektronik ortamda
                            siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürün(ler)in satışı ve
                            teslimi ile ilgili olarak 6502 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli
                            Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin
                            saptanmasıdır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            2.2 İşbu Sözleşmenin akdedilmesi ALICInın KARTONAH ile akdetmiş olduğu web sitesi üyelik
                            sözleşmelerinin hükümlerinin ifasını engellemeyecek olup, ALICI işbu Sözleşme konusu Mal
                            satışında KARTONAH’ın ÜRÜNLERİN SATICISI/ÜRETİCİile herhangi bir şekilde aynı tarafta
                            olmadığını kabul ve beyan ederler.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            3.2 Bu kontratın geçerli hale gelebilmesi için işbu Sözleşme’nin kabulü yanı sıra,
                            sözleşmenin ekinde belirtilen toplam sipariş tutarının defaten ödenmiş ya da kredi kartı ile
                            yapılan ödemenin ALICI tarafından taahhüt edilmiş olması gerekmektedir. Sözleşme konusu
                            ürünün/hizmetin vergileri dâhil satış fiyatı bu kontratta ek olarak belirtilmiştir.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            4. ÜRÜNLER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            4.1 Ürünlerin Cinsi ve Tipi, Miktarı, Marka / Modeli, Rengi, Vergiler Hariç Satış Bedeli web
                            sitesinde belirtildiği gibidir.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            5. MALIN TESLİMİ VE TESLİM ŞEKLİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.1 Sözleşme ALICI tarafından elektronik ortamda onaylanmakla yürürlüğe girmiş olur.
                            Sözleşme ALICI'nın Ürün Satıcı/Üretici’den satın almış olduğu Malın ALICI'ya teslim
                            edilmesiyle ifa edilmiş olur.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.2 Mal, ALICI'nın sipariş formunda ve işbu Sözleşmede belirtmiş olduğu adrese ve belirtilen
                            yetkili kişi/kişilere teslim edilecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.3 INCOTERMS 2020'ye göre ve/veya KARTONAH gönderi sitiline göre malların sevkiyat türü
                            sipariş formuna yazılacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.4 ALICI, incotermslere ek olarak KARTONAH gönderi stilini seçme özgürlüğüne sahiptir. Bu
                            durumda ÜRÜNLERİN SATICISI/ÜRETİCİmalları kargo firmasına teslim eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ÜRÜNLERİN SATICISI/ÜRETİCİ, malların sevkiyat firmasına teslimini tamamladıktan sonra risk
                            ve sorumluluğunu ALICI'ya devreder. Sevkiyat firması kendi firmasından ihracat ve gümrük
                            işlemleri yapmaktadır. Kargo ücreti, sigorta ve tüm riskler ALICI tarafından
                            karşılanacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ALICI, varış limanı gümrük işlemleri için tüm belgelerini nakliye şirketi aracılığıyla
                            alacaktır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            6. KARTONAH BEYAN VE TAHHÜTLERİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            KARTONAH, kendisine işbu Sözleşme ile yüklenen yükümlülükleri, 6502 Sayılı Tüketicinin
                            Korunması Hakkında Kanun ile Mesafeli Sözleşmeler Yönetmeliği’nin kendisine yüklediği
                            yükümlülükleri, mücbir sebepler istisna olmak kaydıyla, tam ve eksiksiz olarak yerine
                            getirmeyi taahhüt eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            6.1 KARTONAH, elektronik ortamda sipariş edilen ürünleri, Tüketici Mevzuatının gereklerini
                            yerine getirerek sağlam, eksiksiz ve belirtilen niteliklerde teslim etmekle yükümlüdür.
                            KARTONAH eğer var ise garanti belgeleri ve kullanım kılavuzlarını ile ALICI'ya teslim
                            edilmesinden sorumludur.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            6.2 KARTONAH kargo ve gümrük işlemlerine kesinlikle karışmaz. ALICInın siparişini vermesi
                            sonrasında gönderim bedelinin ödenmesi ALICIya aittir. İhracat ülkesindeki gümrük
                            işlemlerinin tamamlanması ÜRÜNLERİN SATICISI/ÜRETİCİ’sinin sorumluluğundadır. KARTONAH
                            sorumluluk alarak bu işlemlerde iyi niyetle gözlemci ve denetçi olacaktır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            7. ALICININ BEYAN VE TAHHÜTLERİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.1 ALICInın yetkili kişisi, Web sitesinde yer alan Sözleşme konusu ürünün temel
                            nitelikleri, satış fiyatı ve ödeme şekli ile teslimat ve kargo şekline ilişkin olarak
                            KARTONAH tarafından yüklenen ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda
                            gerekli teyidi verdiğini beyan eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.2 ALICIlar, Tüketici sıfatıyla talep ve şikâyetlerini yukarıda yer alan KARTONAH iletişim
                            bilgilerine ve/veya Web sitesinin sağladığı kanallarla ulaştırabilirler.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.3 ALICI, Satıcının adı, unvanı, adresi, telefonu ve diğer iletişim bilgileri ile satışa
                            konu mal / hizmetin temel özellikleri, satış fiyatı KDV, ödeme koşulları, şartlarını
                            bildiğini kabul ve beyan eder. Satışa konu mal / hizmet ve cayma hakkı dâhil olmak üzere,
                            satışa konu mal / hizmetlere ilişkin şikâyetlerini nereye iletecekleri ve itirazda
                            bulunabilecekleri resmi makamlar hakkında gerekli tüm ön bilgileri bilmektedir. Bu hakkın
                            kendisi ve bu ön bilgileri KARTONAH web sitesi aracılığıyla teyit etmiştir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.4 ALICI, KARTONAH'ın gizlilik politikasını okuduğunu usulüne uygun olarak onayladığını
                            beyan ve kabul eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.5 Ürünler kargo firmasına teslim edildikten sonra, ALICInın ülkesindeki gümrük
                            işlemlerinden ALICI sorumludur. Ürünlerin ve ürünlere ait belgelerin eksiksiz olarak
                            ALICI'ya teslim edilmesi durumunda KARTONAH yükümlülüklerini yerine getirmiş sayılacaktır.
                            Bu sebeple, ALICInın ürünü geç teslim almasından kaynaklanan zararlar ve ürünün sevkiyat
                            firmasında veya gümrükte bekletilmesi ve / veya ilgili kargonun ÜRÜNLERİN
                            SATICISI/ÜRETİCİsinene iade edilmesi nedeniyle oluşan masraflar ALICI’ya aittir
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.6 ALICI, mücbir sebep halleri dışında bu sözleşmeye konu olan yükümlülüklerini yerine
                            getireceğini kabul ve taahhüt eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.7 Zarar görmüş paket durumunda ALICI, hasarlı paketi teslim almamalı ve kargo firmasına
                            tutanak tutturmalıdır. Ürünlerin hasar raporu düzenlenmeden teslim alınması durumunda
                            sorumluluk ALICIya aittir. ALICInın kargo şirketi yetkilisinden teslim aldığı ürünler
                            hasarsız ve sağlam kabul edilir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.8 Ürünlerin taşıma esnasında görebileceği zararlara dair sigorta yaptırtılması sorumluluğu
                            ALICIya aittir. KARTONAH'ın oluşabilecek hasarlara dair sorumluluğu ihraç işleminin
                            gerçekleştirileceği gümrük limanına kadardır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.9 Banka veya finansal kurum, ALICInın kredi kartının yetkisiz kişilerce yasa dışı
                            kullanımı nedeniyle parayı KARTONAH'a ödemeyi reddederse, ALICI, teslim edilen ürünleri 10
                            (on) gün içinde ÜRÜNLERİN SATICISI/ÜRETİCİsine göndermelidir. Bu durumda kargo ücretleri
                            ALICI'ya aittir. ALICI, bir ürünü iade etmeye çalışırken, iade edilen ürünün kullanılmamış
                            ve aynı durumda olması gerektiğini, orijinal faturası ve teslim aldığına dair satın alma
                            belgesi olarak teslim belgesi ile birlikte orijinal ambalajında olması gerektiğini kabul ve
                            taahhüt eder. Böyle bir iade durumunda ALICI, her türlü gümrük işlemleri için gerekli
                            belgeleri sağlamayı ve her türlü ilişikli maliyeti ödemeyi kabul ve taahhüt eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.10 Madde 7.9 ile ilgili olarak, KARTONAH herhangi bir finans kurumu (izyko, paypal ...
                            vb.) Aracılığıyla ödeme alırsa, bu finansal şirket mallar için ödemeyi onayladığı sürece,
                            KARTONAH, ALICInın dolandırıcılık yaklaşımından dolayı sorumlu olmayacaktır. . Böyle bir
                            durumda KARTONAH'ın ALICIya karşı hiçbir sorumluluğu ve sorumluluğu olmayacaktır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            8. GENEL KOŞULLAR
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.1 İşbu Sözleşme ile ALICI, KARTONAH'ın çalışma şeklini ve şartlarını detaylı olarak
                            incelemiş ve sözleşme şartlarına göre hareket etmeyi kabul etmiş ve açıklanan tüm
                            özelliklerle birlikte ürün bedelini belirtilen şartlara uygun olarak ödemeyi kabul ve beyan
                            eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.2 KATONAH ve ALICI, kendileri hakkında birbirlerine verdiği tüm bilgilerin doğru ve
                            eksiksiz olduğunu usulüne uygun olarak bildirir ve beyan eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.3 ALICI, elektronik sipariş sistemi dâhil her türlü ürünün fikri ve sınai haklarının
                            KARTONAH ve / veya ÜRÜNLERİN SATICISI/ÜRETİCİsine ait olduğunu peşinen kabul eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.4 ALICIya KARTONAH tarafından web sitesine girmesi için bir kullanıcı adı ve şifre
                            verilir. ALICI, bu kullanıcı adı ve şifrenin gizliliğinden sorumludur ve üçüncü şahıslarla
                            paylaşılmamalıdır. Aksi takdirde KARTONAH, varsa hasarı ALICI'dan talep etme hakkına
                            sahiptir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.5 ALICI, KARTONAH'ın tüm sitesine zarar verecek veya KARTONAH'ın diğer sitelerle
                            kovuşturulmasına neden olacak herhangi bir zararlı iş veya eylemde bulunmayacağını taahhüt
                            eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.6 Satın-alma gerçekleşirken ALICInın kendi internetinden kaynaklanan sorunlardan KARTONAH
                            sorumlu değildir. ALICI, KARTONAH web sitesini kullanmak için internet ağı ile ilgili
                            sorunları kendisinin çözeceğini peşinen kabul eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.7 ALICI, verilerinin KARTONAH'ın ihmali olmaksızın yetkisiz kişiler tarafından okunması
                            nedeniyle oluşabilecek zararlardan KARTONAH'ı sorumlu tutmayacağını kabul eder.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.8 KARTONAH'tan alınan görsel materyallerin, sunumların, seslerin, videoların ve ilgili her
                            türlü medyanın KARTONAH'ın yazılı onayı olmadıkça çoğaltılması, kopyalanması, yayınlanması
                            veya dağıtılması kesinlikle yasaktır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            9. SÖZLEŞME BEDELİ VE ÖDEME KOŞULLARI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.1 Malın fiyatı, sipariş formunda yer almakla birlikte, sipariş sonu gönderilen
                            bilgilendirme maili ve ürün ile birlikte müşteriye gönderilen fatura içeriğinde mevcut olan
                            fiyattır. Ancak faturaya ürün fiyatına ek olarak KDV de ilave edilir. ÜRÜNLERİN
                            SATICISI/ÜRETİCİsi veya KARTONAH tarafından yapılan indirimler, kuponlar, kargo ücreti ve
                            sair uygulamalar satış fiyatına yansıtılır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.2 Bu mesafeli satış sözleşmesi için Incoterms kuralları sipariş formunda belirtilmiştir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.3 Ödeme, banka havalesi / SWIFT veya kredi kartı ile yapılabilir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.4 SWIFT/ Eft/ Havale Yoluyla Ödeme: Kullanıcının bu ödeme yöntemini tercih etmesi halinde
                            KARTONAH’a ait aşağıda IBAN Bilgileri yazılı Banka hesabına ödeme yapılabilir. Bu durumda
                            ödeme dekontunun bir örneğinin muhasebe@kartonah.com e-posta adresine iletilmesi
                            gerekmektedir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Banka Hesap Bilgileri:
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ALICI Adı: KARTONAH İTHALAT İHRACAT E-TİCARET LİMİTED ŞİRKETİ
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Banka: TÜRKİYE FİNANS KATILIM BANKASI A.Ş.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Şube: IHLAMURKUYU
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Hesap Döviz Türü: USD
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            IBAN No: TR60 0020 6002 2504 3475 1701 01
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            BIC / SWIFT Kodu: AFKBTRISXX
                        </Text>

                        <Text text90 margin-10 marginB-0>
                            9.5 Web sitesi ödeme yöntemi tercih edilirse, KARTONAH web sitesinde yer alan ödeme
                            bölümünde istenen bilgiler girilerek ödeme işlemi tamamlanabilir. Bu bilgilerdeki herhangi
                            bir eksiklik veya hatadan KARTONAH sorumlu değildir. Kredi kartı ile yapılacak ödeme,
                            KARTONAH'ın isteği doğrultusunda tek seferde yapılabilir. Ayrıca bankanın yapacağı
                            kampanyalar neticesinde taksit sayısı artırılabilir. Ancak bu durum KARTONAH'ın bilgisi ve
                            iradesi dışındadır ve KARTONAH'ın bu konuda hiçbir taahhüdü veya sorumluluğu yoktur.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Ödemelerin kredi kartı ile yapılması durumunda ALICI'nın bankası tarafından yapılan kredi
                            kartının kullanılması ve temerrüt / gecikme durumunda uygulanacak faiz oranı KARTONAH için
                            bağlayıcı değildir. ALICI, bu konularda kullanılan kredi kartını temin eden banka ile
                            irtibat halindedir ve ilgili bilgileri elde etmek kullanıcının sorumluluğundadır. ALICI,
                            kredi kartı ile ödeme yaparken kullandığı kredi kartının kendisine ait olduğunu ve kendisine
                            ait olmasa dahi kart sahibinin bilgisi ve rızası dâhilinde kullanıldığını peşinen kabul ve
                            taahhüt eder. Bu konuda herhangi bir olumsuzluk olması durumunda sorumluluk kullanıcıya
                            aittir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.6 Kargo Ücreti: Kargo ücreti ürün fiyatına dâhil değildir. ÜRÜNLERİN SATICISI/ÜRETİCİ
                            kargonun bedelini hesaplar ve ALICI adına ayrıca faturalandırarak ALICIdan tahsil eder ve /
                            veya ALICI gönderi işlemlerini ALICI'nın tercihine göre düzenler.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.7 Söz konusu ürün bedeli ödeme koruma sistemi kapsamında KARTONAH tarafından ALICI'dan
                            ÜRÜNLERİN SATICISI/ÜRETİCİadına tahsil edilmektedir. ALICI malın bedelini KARTONAH’a
                            ödemekle, ürün bedelini satıcıya ödemiş sayılacaktır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            10. CAYMA HAKKI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.1 ALICI, sözleşme konusu ürürünün kendisine veya gösterdiği adresteki kişi/kuruluşa
                            tesliminden itibaren 14 gün içinde cayma hakkına sahiptir. Cayma hakkının kullanılması için
                            bu süre içinde KARTONAH ve ÜRÜNLERİN SATICISI/ÜRETİCİsi’ya email yolu ile ile yazılı olarak
                            bildirimde bulunulması ve ürünün 10.8 madde hükümleri çerçevesinde kullanılmamış olması
                            şarttır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.2 Cayma hakkının kullanılması halinde, ALICI’ya teslim edilen ürünün ÜRÜNLERİN
                            SATICISI/ÜRETİCİsi’ya geri gönderildiğine ve teslim edildiğine ilişkin kargo teslim tutanağı
                            örneği ile fatura aslının iadesi zorunludur. Bu belgelerin eksiksiz ve ürünlerin hasarsız
                            ulaşmasını takip eden 10 iş günü içinde ürün bedeli ödemenin yapıldığı aynı yöntem ile
                            ALICI’ya iade edilir. Cayma hakkı nedeni ile iade edilen ürünün kargo bedeli, var ise gümrük
                            masrafları, depolama ücretleri, ihraç iadesi sebebi ile oluşabilecek cezalar ve masraflar,
                            sigorta bedelleri ALICI tarafından karşılanır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.3 Cayma durumunda, gümrüklü işlemlerde Gümrükten kaynaklı oluşacak gecikmeler ve
                            masraflardan dolayı KARTONAH ve/veya ÜRÜNLERİN SATICISI/ÜRETİCİsorumlu değildir. Tüm gerekli
                            dökümantasyon ve formaliteler ALICI tarafından yapılacak olup, gümrük masraflarına dair risk
                            ALICIya aittir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.4 385 sayılı vergi usul kanunu genel tebliği uyarınca sahış adına kesilen faturalarda
                            iade işlemlerinin yapılabilmesi için ALICIya göndermiş olduğumuz iade bölümü bulunan
                            faturada ilgili bölümlerin eksiksiz olarak doldurulması ve imzalandıktan sonra tarafımıza
                            ürün ile birlikte geri gönderilmesi, var ise tüm gümrük ve taşıma prosedürlerinin
                            gerçekleştirilmiş olması gerekmektedir. Firma adına kesilen faturalarda ise iade
                            işlemlerinin yapılabilmesi için ALICI firmanın ÜRÜNLERİN SATICISI/ÜRETİCİfirmaya (kargo
                            ücretini ve diğer oluşan hiç bir masrafı eklemeden) iade faturası kesmesi ve iade
                            faturasının tarafımıza ürün ile birlikte geri gönderilmesi gerekmektedir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.5 ALICI’nın cayma hakkının olduğu durumlarda bu hakkını kullanma şartları, süresi ve
                            usulü ile hakkın süresinde kullanılmaması durumunda ALICI’nın cayma hakkını kaybedecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.6 Cayma hakkı olan Ürünler'de, Ürün cayma süresi içinde kullanım talimatlarına, olağan
                            işleyişine veya teknik özelliklerine uygun kullanılmamasından ötürü bozulduğu veya bir
                            değişikliğe uğradığı takdirde ALICI’nın cayma talebinin kabul edilmeyebilecektir, ÜRÜNLERİN
                            SATICISI/ÜRETİCİsi'nin kabul ettiği hallerde söz konusu bozukluğa veya değişime göre uygun
                            bulduğu bir tutarı ALICI’ya yapacağı geri ödemeden mahsup edebilecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.7 Cayma hakkının bulunduğu durumlarda Ürünleri ÜRÜNLERİN SATICISI/ÜRETİCİ'ne ne şekilde
                            iade edebileceği ve ilgili tüm mali hususlar (iade yolları, gümrük formaliteleri, iade ve
                            gümrük masrafları ve ürün bedelinin iadesive oluşan mahsuplar dahil) her bir durum için net
                            şekilde yazılı olarak ALICIya bildirilecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.8 ALICI'nın özel istek ve talepleri doğrultusunda üretilen ve / veya üzerinde değişiklik
                            veya ilaveler yapılarak kişiye özel üretilen ürünler için cayma hakkı kullanılamaz,
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            örneğin: kullanıcının isteğine göre kesilmiş, delinmiş, özel renkte yapılmış ürünler.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Ürünlerde cayma hakkının kullanılması, ürünün kullanılmamış ve ambalajının açılmamış ve
                            sağlam olmasına bağlıdır.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            11. MÜCBİR SEBEPLER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Aşağıdaki sebeplerden herhangi biri dolayısıyla taraflar, işbu Sözleşme ahkâmını tamamen
                            veya kısmen yerine getiremediği takdirde bu aykırılıktan sorumlu tutulmayacaktır; doğal
                            afetler, işgücü ihtilafları, dünya çapında veya yerel dijital iletişim kısıtlamaları ve
                            imkansızlıkları, ürün veya hizmette devlet sınırlamaları veya eylemleri, terör saldırıları,
                            deprem, sabotaj, grev, lokavt, işçi ve memur ihtilafları, sair iletişim hatlarındaki uzun
                            süreli kesintiler, yangın ve dahili tabii ve semai afetler, ödemeler hususundaki devlet ile
                            alakalı imkansızlıklar, devlet kurumlarının aldığı faaliyet engelleyici kararlar, savaş
                            (ilan edilmiş veya ilan edilmemiş) veya diğer savaş halleri veya işbu Anlaşmanın imzalandığı
                            tarihte görülebilir olmayan ve ilgili tarafın makul kontrolü dışında olan başka bir olay,
                            koşul veya nedenle engellenmesi veya ifade edilmesi zor, pahalı veya ticari açıdan
                            uygulanamaz addedilmesi, kanunen veya teamülden mücbir sebep sayılabilen diğer bilcümle
                            hallerin gerçekleşmesi.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Mücbir sebebin üç (3) aydan fazla sürmesi halinde, taraflardan herhangi biri karşı tarafa
                            yazılı bir bildirim göndererek (fesih tarihine kadar işbu sözleşmeden kaynaklanan alacak ve
                            borçlara dair haklar saklı kalmak kaydıyla) sözleşmeyi hemen feshedebilir.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            12. KAYIT VE DELİL KABULÜ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            İşbu anlaşmadan kaynaklanan ticari ilişki nedeniyle tarafların karşılıklı borç ve alacağının
                            miktarı KARTONAH’ın defter ve bilgisayar kayıtlarına göre taayyün edecektir. Bu bakımdan
                            KARTONAH sağlayıcıya ait defter ve bilgisayar kayıtlarının Hukuk Mahkemeleri Kanunu’nun 193.
                            maddesi kapsamında kat'i delil teşkil ettiğini taraflar şimdiden kabul etmiştir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Her iki tarafta talep eden tarafa ticari ilişkiyi gösteren dokümantasyonu temin etmek ile
                            yükümlüdür.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            13. FERAGAT ETME ŞEKLİ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Taraflardan her biri, karşı tarafa imzalanmış yazılı bir feragatname vermedikçe taraflar,
                            işbu anlaşma ve eklerinde yer alan herhangi bir hakkından feragat etmiş sayılmayacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            14. UYUŞMAZLIKLARIN ÇÖZÜMÜ
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Varlığı, geçerliliği veya feshine ilişkin hususlar dahil olmak üzere işbu sözleşmeden veya
                            işbu sözleşme ile bağlantılı olarak ortaya çıkan ihtilaflar, taraflarca dostane bir şekilde
                            çözülmeye çalışacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Tarafların dostane çözüm girişimi süresince, Taraflardan her biri ihtilafın ilgili
                            kurumlarındaki en üst düzey karar alma görevlilerine götürülmesini talep edebilir. Bu tarz
                            bir talepte bulunulması halinde, ilgili kurumlardaki karar ALICIlar ihtilafı ve çözümü için
                            olası araçları görüşmek üzere en az iki kez yüzyüze ve/veya online olarak bir araya
                            gelecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Dostane çözüm girişiminin girişim başlangıcından itibaren 30 gün içerisinde ihtilafın çözümü
                            ile neticelenmemesi halinde, ihtilaf o tarihte yürürlükte olan ISTAC Tahkim Kurallarına
                            (‘’Kurallar’’) uygun bir şekilde İstanbul Tahkim Merkezi (ISTAC) tarafından yürütülecek
                            tahkime götürülecek ve nihai olarak bu tahkim tarafından çözülecektir ve bu Kurallar
                            bağlamında Tahkime sunulmuş sayılacaktır. Tahkim yeri, Türkiye Cumhuriyeti İstanbul’dur.
                            Tahkim dili kullanıcının ana diline göre ya da ingilizce olarak belirlenecektir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Tahkim Kurulu, üç hakemden oluşacak olup, ihtilaflı taraflardan her biri bir hakem tayin
                            edecek ve üçüncü hakem Tahkim Kurulu Başkanı olacak ve atanmış bu iki hakem tarafından
                            seçilecektir, ancak tarafların bir ay içerisinde üçüncü hakemi seçme ve atama konusunda
                            başarısız olması halinde, ISTAC bu hakemi atayacaktır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Tahkim işlemlerinin sonucu, nihai ve Taraflar üzerinde bağlayıcı olacaktır. Kusurlu ilan
                            edilen taraf, kusur yüzdesine uygun bir şekilde Tahkim Kurulu masraflarını ödemekle
                            yükümlüdür.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Taraflar, tahkim işlemlerinin başlatılması nedeniyle işbu sözleşme kapsamındaki
                            yükümlüklerinin ifasından kurtulmayacaklardır.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Çözülmemiş tahkim mahkemeye gider ve İstanbul Türkiye Cumhuriyeti mahkemeleri yetkilidir.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            15. İHBARLAR
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            İşbu Anlaşma kapsamında yapılması gereken veya yapılmasına izin verilen tebliğ, muvafakat
                            veya diğer iletişimler, İngiliz dilinde yazılı olarak yapılacak ve (a) bizzat teslim
                            edildiğinde veya (b) teslim edildiğine dair göndere yazılı onay verilmek suretiyle ticari
                            kurye yoluyla teslim edildiğinde yapılmış sayılacaktır. Tebliğ, muvafakat veya diğer
                            iletişimler (dava tebliği olmamak üzere), noter kanalıyla da verilebilir. Tebliği kabul
                            etmeyi reddetme veya başka bir şekilde itiraz etme veya adres değişikliği nedeniyle teslim
                            edememe durumunda, gönderilen bu tebliğ, muvafakat veya iletişim teslim edilmiş
                            sayılacaktır. Tebliğde kullanılacak isimler ve adresler (taraflarca başka adlar ve adresler
                            yazılı olarak bildirilmediği sürece veya bildirilene dek), aşağıda verilmektedir.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            16. YÜRÜRLÜLÜK
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            16 (on altı) maddeden ibaret bu Sözleşme, Taraflarca okunarak XX.XX.2021 tarihinde, ALICI
                            tarafından elektronik ortamda onaylanmak suretiyle akdedilmiş ve yürürlüğe girmiştir.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            ALICI ADINA İMZALAYAN:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Adı, Soyadı:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Görevi:
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ALICININ İMZASI
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            KARTONAH ADINA İMZALAYAN
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Adı, Soyadı: Mosaab Sami Mahmoud ELMASRI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Görevi: Genel Müdür
                        </Text>

                        <Text text90 margin-10 marginB-0 marginT-30>
                            KARTONAH'IN İMZASI
                        </Text>
                    </>
                ) : (
                    <>
                        <Text text90 margin-10 marginB-0>
                            This distance sales agreement (this “Agreement” or this “Personal Data Protection and
                            Distance Sales Agreement’’) is entered into effective as of XX.XX.XXXX (the “Effective
                            Date”).
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            1. DEFINATIONS
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.1 SELLER / SERVICE PROVIDER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            KARTONAH IMPORT EXPORT E_COMMERCE LIMITED COMPANY (“SERVICE PROVIDER)”, ‘’SP’’,
                            ‘’KARTONAH’’) which is commercially active and registered as below.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Chamber of Commerce Register No: 187729-5,
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Registered Address: Bahcelievler Mahallesi, Mehmetcik Sokak, Kadir Has Sitesi, No:1/1 Flat:4
                            Unit:407 Bahçelievler, İstanbul, Turkey
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address Code: 2701340768
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Registered Tax Office: Bahcelievler,
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Registered Tax Number: 5261410944
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Web Page: www.kartonah.com
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            E-mail: info@kartonah.com
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telephone Number: +90 212 852 18 01
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.2 BUYER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            ABCDE KLMNO ("BUYER", "B") is the real person or company who purchases the goods and / or
                            services offered for sale on the Site by KARTONAH, whose information is below.
                        </Text>
                        <Text text90 marginH-10 marginB-0 bold style={{textDecorationLine: 'underline'}}>
                            Real Person:
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Name:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Surname:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Nationality:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Residential Country:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Turkish ID No: (If Turkey Residential):
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Origin National ID No: (If Foreigner)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Date of Birth:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Place of Birth:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Passport No: (If Foreigner)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Email:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telephone Number:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Graduation / Occupation:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            As Company:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Purchaser Name:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Purchaser Surname:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Company Registration Country:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Company Tax number:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Establishment Date: (Optional)
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Email:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Telephone Number:
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.3 VENDOR OF GOODS / MANIFACTURER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Real or legal person who is providing products to BUYER and benefit mutually agreed payment
                            under the conditions specified in this Distance Sales Agreement.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Name:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Address Code:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Registered Tax Office:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Registered Tax Number:
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.4 WEB SITE
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Refers to the web sites of the SELLER / SERVICE PROVIDER 's domain name
                            https://kartonah.com/ and sub-domains linked to this domain, which allows BUYER to purchase
                            products and / or services offered for sale by the KARTONAH at the specified sales price.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.5 PRODUCT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            All kinds of commercial goods offered for sale by the KARTONAH on the website.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.6 MEMBERSHIP AGREEMENT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            It refers to the membership agreement approved by the BUYER, who provides the opportunity to
                            order through the website.
                        </Text>
                        <Text text80 margin-10 marginB-0 bold color={Colors.secondary}>
                            1.7 PAYMENT PROTECTION SYSTEM
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In order to minimize the risk of the BUYER and the VENDOR OF GOODS/ MANUFACTURER it refers
                            to the systematic of KARTONAH to collect the product payments from the BUYER on behalf of
                            the manufacturer and to pay the VENDOR OF GOODS/ MANUFACTURER when the shipment is made from
                            the VENDOR OF GOODS/ MANUFACTURER to the BUYER according to the agreed standards.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            2. SUBJECT OF THE AGREEMENT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            2.1 The subject of this contract; It is the determination of the rights and obligations of
                            the parties in accordance with the provisions of the Law No. 6502 on the Protection of
                            Consumers and the Regulation on Distance Contracts regarding the sale and delivery of the
                            product (s) whose qualifications and sales price are specified below, which the BUYER has
                            ordered electronically from the website of KARTONAH.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            2.2 The execution of this Agreement will not prevent the execution of the provisions of the
                            website membership agreements concluded by the buyer with KARTONAH, and the BUYER accepts
                            and declares that KARTONAH is not the same party in any way with the VENDOR OF GOODS/
                            MANUFACTURER in the sale of the goods subject to this Agreement.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            3.2 In order for this contract to become valid, in addition to the acceptance of this
                            Contract, the total order amount specified in the annex of the contract must be paid in lump
                            sum or the payment made by credit card must be committed by the BUYER. The sales price of
                            the product / service subject to the contract, including the taxes, is stated additionally
                            in this contract.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            4. PRODUCTS
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            4.1 The Type and Type of the Products, Quantity, Brand / Model, Color, Sales Price exluding
                            Taxes are as stated on the webside.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            5. DELIVERY OF THE GOODS AND METHOD OF DELIVERY
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.1 The Contract becomes effective upon being approved electronically by the BUYER. The
                            contract is fulfilled by the delivery of the Goods purchased by the Buyer from the VENDOR OF
                            GOODS/ MANUFACTURER to the Buyer.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.2 The goods will be delivered to the address specified by the BUYER in the order form and
                            in this Agreement and to the specified authorized person (s).
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.3 According to INCOTERMS 2020 and/or KARTONAH shiment style, the shipping type of goods
                            shall be written on the order sheet.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            5.4 In addition the incoterms, The BUYER has freedom to choose KARTONAH shipment style. In
                            such case The VENDOR OF GOODS/ MANUFACTURER deliver goods to shipping company.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The VENDOR OF GOODS/ MANUFACTURER transfers the risk and responsibility to the BUYER after
                            completing the delivery of goods to the shipment company. Shipment company make export and
                            custom procedure from his own company. Shipping fee, insurance and all risks shall be
                            covered by the BUYER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            BUYER shall receive all his documentation via shipment company for arrival port custom
                            formalities.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            6. KARTONAH DECLARATIONS AND COMMITMENTS
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            KARTONAH undertakes to fulfill the obligations imposed on it by this Agreement, the
                            obligations imposed by the Law on the Protection of the Consumer No 6502 and the Regulation
                            on Distance Agreements, except for force majeure.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            6.1 KARTONAH is obliged to deliver the products ordered in electronic environment in a
                            sound, complete and in the specified qualities by fulfilling the requirements of the
                            Consumer Legislation. KARTONAH is responsible for delivering to the BUYER with warranty
                            documents and user manuals, if any.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            6.2 KARTONAH does not interfere with shipment operations and customs procedures. After the
                            BUYER places his order, the payment of the shipping fee belongs to the buyer. The completion
                            of customs formalities in export country is the responsibility of the VENDOR OF GOODS/
                            MANUFACTURER. KARTONAH shall be an observer and auditor for these transactions in good faith
                            by taking responsibility.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            BUYER DECLARATIONS AND COMMITMENTS
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.1 The authorized person of the BUYER declares that she/he has read the preliminary
                            information uploaded by KARTONAH regarding the basic characteristics of the contract
                            product, the sales price and payment method, and the delivery and shipping method on the
                            website, and that he has given the necessary confirmation electronically.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.2 Buyers can convey their demands and complaints as a consumer to the KARTONAH contact
                            information above and / or through the channels provided by the website.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.3 The BUYER agrees and declares that he/she/it is aware of the Seller’s name, title,
                            address, telephone and other contact information and the basic characteristics of the
                            goods/services subjected to sale, sale price inc tax, terms of payment, terms of delivery
                            etc. as well as he/she/it is aware of all necessary preliminary information about official
                            authorities where to submit their complaints and raise any objection about goods/services
                            subjected to sale and right of withdrawal including how to avail him/her/itself of this
                            right and has confirmed those preliminary information via KARTONAH website.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.4 BUYER declares and gives agreeement duly confirmed that she/he has read privacy policy
                            of KARTONAH.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.5 After the products delivered to the shipment company, the BUYER is responsible for the
                            customs procedures in the BUYER 's country. In the event that the products and the documents
                            of the products are completely delivered to the Buyer, KARTONAH shall be deemed to have
                            fulfilled its liabilities. For this reason, any damages caused by the BUYER 's late takeover
                            of the product and the expenses incurred due to the fact that the product has been waiting
                            in the shipment company or custom and / or the cargo are returned to the VENDOR OF GOODS/
                            MANUFACTURER related belongs to the BUYER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.6 The BUYER acknowledges and undertakes to fulfill its obligations subject to this
                            agreement except circumstances of the force majeure.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.7 In the case of damaged package, the BUYER should not take the delivery of the damaged
                            package and have the shipment company shall to prepare official report. In case the products
                            are received without issuing damage report, the responsibility belongs to the BUYER. The
                            products received by the buyer from the cargo company officer are considered to be undamaged
                            and intact.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.8 The responsibility of taking out insurance for the damages of the products during
                            transportation belongs to the BUYER. The responsibility of KARTONAH for the damages that may
                            occur is up to the customs port where the export process will take place.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.9 If the bank or the financial corporate refuses to pay the money to the KARTONAH due to
                            illegal usage of the BUYER’s credit card by unauthorized people, the BUYER has to send the
                            delivered products within 10 (ten) days to the VENDOR OF GOODS/ MANUFACTURER. In this case,
                            cargo charges belong to the Buyer. The BUYER when trying to return a product, he/she agrees
                            and undertakes that a returned product must be unused and in the same condition and original
                            packaging with the original invoice and delivery note as a proof of purchase in which he/she
                            received it. In the event of such a return, the Buyer agrees and undertakes to provide the
                            necessary documents for all kinds of customs procedures and the BUYER shall cover all
                            related cost.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            7.10 Related with article 7.9, if the KARTONAH receive payment via any finance corporate
                            (like izyko, paypal, etc.), as long as this financial corporate confirm payment for goods
                            took place, KARTONAH shall have no responsibility due to fraud approach of BUYER. In such
                            case KARTONAH shall have no liability and responsibility against BUYER.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            8. GENERAL CONDITIONS
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.1 With this Agreement, the BUYER has examined the working manner and conditions of
                            KARTONAH in detail and has accepted to act in accordance with the terms of the contract and
                            agrees and declares to pay the product price with all the features described in accordance
                            with the specified conditions.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.2 KARTONAH and BUYER dully notify and declere that all the information which is provided
                            to eachother about theirself is correct and complete.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.3 The BUYER accepts in advance that the intellectual and industrial rights of all kinds of
                            products, including electronic order system belong to the KARTONAH and/or VENDOR OF GOODS/
                            MANUFACTURER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.4 A user name and password are provided to the BUYER by the KARTONAH to enter the website.
                            The BUYER is responsible for the confidentiality of this username and password and should
                            not be shared with third parties. Otherwise, KARTONAH has the right to claim the damage from
                            the BUYER, if any.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.5 The BUYER undertakes not to do any harmful work or actions that will harm the entire
                            site of the KARTONAH or cause KARTONAH to prosecute with other sites.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.6 KARTONAH is not responsible for the problems caused by the BUYER 's own internet while
                            purchasing take place. In order to use KARTONAH website, the BUYER agrees in advance that
                            himself/herself will solve the problems related to his internet network.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.7 The BUYER accepts that he / she will not hold KARTONAH responsible for any damages that
                            may occur due to the fact that his/her data is read by unauthorized persons without
                            negligence of KARTONAH.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            8.8 It is strictly forbidden to reproduce, copy, publish or distribute the visual material,
                            presentations, sounds, videos and any related media taken from the KARTONAH unless written
                            confirmation from KARTONAH.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            9. CONTRACT PRICE AND PAYMENT TERMS
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.1 The price of the product is included in the order form, but is the price present in the
                            information mail sent after the order and the invoice sent to the customer with the product.
                            However, in addition to the product price, VAT is also added to the invoice. Discounts,
                            coupons, shipping costs and other applications made by the VENDOR OF GOODS/ MANUFACTURER or
                            KARTONAH are reflected in the sales price.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.2 Incoterms rules for this distance sales agreement is mentined on the order form.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.3 Payment may take place by money order / SWIFT or by credit card.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.4 Payment by SWIFT/Eft / Wire Transfer: If the user chooses this payment method, payment
                            can be made to the Bank account of the KARTONAH whose IBAN information is written below. In
                            this case, a copy of the payment receipt must be sent to the e-mail address of
                            muhasebe@kartonah.com
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Bank account information:
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Beneficiary Name: KARTONAH İTHALAT İHRACAT E-TİCARET LİMİTED ŞİRKETİ
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Bank: TÜRKİYE FİNANS KATILIM BANKASI A.Ş.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Branch: IHLAMURKUYU
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Account Currency: USD
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            IBAN No: TR60 0020 6002 2504 3475 1701 01
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            BIC / SWIFT Code: AFKBTRISXX
                        </Text>

                        <Text text90 margin-10 marginB-0>
                            9.5 If the payment method from webside is preferred, the payment process can be completed by
                            entering the information requested in the payment section on the website of the KARTONAH.
                            KARTONAH is not responsible for any deficiencies or errors in this information. Payment to
                            be made by credit card can be made in a single shot, provided that it is at the will of the
                            KARTONAH. In addition, the number of installments may be increased as a result of the
                            campaigns to be made by the bank. However, this situation is beyond the knowledge and will
                            of KARTONAH, and KARTONAH has no commitment or responsibility in this regard.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            If the payments are made by credit card, the use of the credit card made by the BUYER 's
                            bank and the interest rate to be applied in case of default / delay are not binding for
                            KARTONAH. The BUYER is in contact with the bank providing the credit card used in these
                            matters and it is the user's responsibility to obtain the relevant information. The BUYER
                            accepts and undertakes in advance that the credit card used during payment by credit card
                            belongs to the user and that it is used within the knowledge and consent of the cardholder
                            even if it does not belong to him / her. In the event of any negativity in this regard, the
                            responsibility belongs to the user.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.6 Shipping Fee: The shipping fee is not included in the product price. The VENDOR OF
                            GOODS/ MANUFACTURER calculates the cost of the cargo and collects it from the buyer by
                            invoicing it separately on behalf of the BUYER and/or The BUYER arranges the shipment
                            operations according to the BUYER 's preference.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            9.7 The product price in question is collected by KARTONAH from the BUYER on behalf of the
                            VENDOR / MANUACTURER OF GOODS within the scope of the payment protection system. The buyer
                            will be deemed to have paid the price of the product to the seller by paying the price of
                            the product to KARTONAH.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            10 .RIGHT OF WITHDRAWAL
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.1 The BUYER has the right of withdrawal within 14 days from the delivery of the product
                            subject to the contract to him or to the person / organization at the address indicated. In
                            order to use the right of withdrawal, it is obligatory to notify KARTONAH and the VENDOR /
                            MANUACTURER OF GOODS in writing via e-mail and the product must not be used within the
                            framework of the provisions of article 10.8.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.2 In the event that the right of withdrawal is exercised, it is obligatory to return the
                            original invoice and a copy of the cargo delivery report indicating that the product
                            delivered to the BUYER has been returned to the VENDOR / MANUACTURER OF GOODS and delivered.
                            The product price is returned to the BUYER with the same method in which the payment was
                            made within 10 business days following the receipt of these documents in full and without
                            any damage. The shipping cost of the returned product due to the right of withdrawal, if
                            any, customs costs, storage fees, penalties and expenses due to export return, insurance
                            costs are covered by the BUYER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.3 In case of withdrawal, KARTONAH and / or VENDOR / MANUACTURER OF GOODS is not
                            responsible for delays and expenses caused by Customs in Customs transactions. All necessary
                            documentation and formalities will be made by the buyer, and the risk of customs costs
                            belongs to the BUYER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.4 In order to carry out the transactions, the relevant parts of the invoice with the
                            return section we have sent to the BUYER must be filled in completely and returned with the
                            product after it is signed, and if any, all customs and transportation procedures must be
                            carried out. For invoices issued on behalf of the company, the BUYER company must issue a
                            return invoice to the VENDOR / MANUACTURER OF GOODS company (without adding the shipping fee
                            and any other costs) and the return invoice must be returned to us together with the
                            product.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.5 In cases where the BUYER has the right of withdrawal, the BUYER will lose the right of
                            withdrawal in case the right is not used in time with the conditions, duration and procedure
                            of using this right.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.6 In the Products with the right of withdrawal, if the product is damaged or changed due
                            to the use in accordance with the instructions for use, ordinary functioning or technical
                            specifications within the period of withdrawal, the BUYER's request for withdrawal may not
                            be accepted, in cases where the VENDOR / MANUACTURER OF GOODS accepts it, according to the
                            said disorder or change. will be able to offset an amount from the refund it will make to
                            the BUYER.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.7 In cases where there is a right of withdrawal, the BUYER will be informed in writing
                            about how it can be returned to the VENDOR / MANUACTURER OF GOODS and all relevant financial
                            issues (including return routes, customs formalities, return and customs costs, and the
                            return of the product price and the deductions that occur).
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            10.8 The right of withdrawal cannot be exercised for the products that are produced in
                            accordance with the special requests and demands of the BUYER and / or customized by making
                            changes or additions on them,
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            for example: products that have been cut, pierced, made in a special color according to the
                            user's request.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Using the right of withdrawal in products is depending products unused and packaging
                            unopened and intact.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            11. FORCE MAJEURE
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            For any of the following reasons, the parties will not be held liable for this breach if
                            they fail to fulfill the provisions of this Agreement in whole or in part; natural
                            disasters, labor disputes, global or local digital communication restrictions and
                            impossibilities, state restrictions or actions in product or service, terrorist attacks,
                            earthquakes, sabotage, strikes, lockouts, worker and civil servant disputes, long-term
                            interruptions in other communication lines, fire and internal natural and civil disasters,
                            state-related impossibilities of payments, decisions to impede action by government
                            agencies, war (declared or not announced) or other situations of war, or any other event,
                            condition or condition that is not visible at the time of signing this Agreement and is
                            beyond the reasonable control of the party concerned. For this reason, to prevent or to be
                            deemed difficult to express, expensive or commercially inapplicable, the realization of all
                            other situations that can be deemed legal or customary force majeure.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            If the force majeure lasts more than three (3) months, any of the parties may terminate the
                            agreement immediately by sending a written notification to the other party (without
                            prejudice to the rights of receivables and debts arising from this agreement until the
                            termination date).
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            12. ACCEPTANCE OF RECORD AND EVIDENCE
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The amount of mutual debts and receivables of the parties due to the commercial relationship
                            arising from this agreement will be determined according to the books and computer records
                            of the KARTONAH. In this regard, the parties have already accepted that the books and
                            computer records of the KARTONAH constitute definitive evidence within the scope of Article
                            193 of the Law on Legal Proceedings.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Both sides are obliged to provide documentation showing the commercial relationship to the
                            requesting party.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            13. FORM OF WAIVER
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The parties will not be deemed to have waived any of their rights in this agreement and its
                            annexes, unless each of them gives a written waiver signed to the other party.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            14. RESOLUTION OF DISPUTES
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Any dispute arising out of or in connection with this agreement, including any question
                            regarding its existence, validity or termination, shall be attempted by the parties to be
                            amicably resolved.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            In the course of the Parties’ attempts at amicable settlement, either Party may request that
                            the dispute be brought before the most senior decision-making person in their respective
                            organizations. If such a request is made, the decision-makers in the organizations concerned
                            shall meet at least two times to consider the dispute and possible means to resolve it.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            If the attempt at amicable settlement does not result in resolving the dispute within 30
                            days of the start of the attempt, the dispute shall be referred to and finally resolved by
                            arbitration administered by the Istanbul Arbitration Centre (ISTAC) in accordance with the
                            Arbitration Rules of ISTAC (“Rules”) for the time being in force and reference shall be
                            deemed to be a submission to Arbitration within the meaning of these Rules. Arbitration
                            shall take place in Istanbul, the Turkish Republic. Language of the arbitration proceedings
                            shall be designated by user mother tongue or English.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The Arbitration Tribunal shall consist of three arbitrators, one appointed by each of the
                            contesting parties, the third arbitrator shall be the Chairman of Arbitration Tribunal and
                            shall be selected by the two appointed arbitrators, in case of failing to select and appoint
                            the third arbitrator within one month ISTAC shall be the appointing authority.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The outcome of the arbitrational proceedings shall be final and binding on the Parties. The
                            party declared as wrongful is liable to pay the expenses of the Arbitration Board according
                            to their wrongful percentage.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            The Parties shall not be released from performing their obligations under this AGREEMENT
                            because arbitrational proceedings have been initiated.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Unresolved arbitration shall go to court and Turkish Republic courts of Istanbul is
                            authorised.
                        </Text>
                        <Text text70 margin-10 marginB-0 bold color={Colors.primary}>
                            15. NOTICES
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Any notice, consent or other communication required or permitted under this Agreement shall
                            be written in English and shall be deemed given when (a) delivered personally; (b) or (b)
                            sent by commercial courier with written verification of receipt returned to the sender.
                            Notice, consent or other communications (but not service of process) may also be given by
                            notary public. Rejection or other refusal to accept or the inability to deliver because of
                            changed address was given shall be deemed to constitute receipt of the notice, consent or
                            communication sent. Names, addresses for notices (unless and until written notice of other
                            names, addresses are provided by either or both parties) are provided above.
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            16. ENFORCEMENT
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            This Agreement, which consists of 16 (sixteen) articles, was read by the Parties and entered
                            into force on XX.XX.2021 by being approved by the Buyer in electronic environment.
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            SIGNED BY ON BEHALF OF BUYER:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Name, Surname:
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            Title: Managing Director
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            SIGNATURE OF BUYER
                        </Text>
                        <Text text90 marginH-10 marginB-0>
                            SIGNED BY ON BEHALF OF KARTONAH:
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Name, Surname: Mosaab Sami Mahmoud ELMASRI
                        </Text>
                        <Text text90 margin-10 marginB-0>
                            Title: Managing Director
                        </Text>
                        <Text text90 margin-10 marginB-0 marginT-30>
                            SIGNATURE OF KARTONAH
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

DistanceTerms.screenName = 'Kartonah.Screens.DistanceTerms';

DistanceTerms.options = {
    bottomTabs: {
        visible: false,
    },
};

export default DistanceTerms;
