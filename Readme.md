# NextJS Projesi - Bet App
Bu proje, spor bahisleri ve etkinliklerine dair güncel bilgileri sunan, Next.js ve React kullanılarak geliştirilmiş modern bir web uygulamasıdır. Uygulama, spor programları üzerinde filtreleme yapabilme, detaylı program bilgilerini görüntüleme ve kullanıcıların kendi kuponlarını oluşturabilmesi gibi özellikleri içerir. Modern web geliştirme tekniklerini ve en iyi pratikleri benimseyerek, kullanıcı dostu bir deneyim sunmayı amaçlar.

Özellikler
Spor Programı Listeleme: Güncel spor etkinliklerini ve programlarını listeler.
Filtreleme: Kullanıcıların etkinlikleri tarih, spor dalı veya takım adına göre filtreleyebilmesi.
Kupon Oluşturma: Kullanıcıların seçtikleri maçlarla kendi bahis kuponlarını oluşturabilmesi.
Detaylı Program Bilgileri: Her bir etkinlik için detaylı bilgilerin sunulması.
Responsive Tasarım: Farklı cihaz ve ekran boyutlarına uyum sağlayan kullanıcı arayüzü.

## Kullanılan Teknolojiler
Next.js: Server Side Rendering (SSR), statik site oluşturma (Static Site Generation - SSG) ve API route'ları gibi özellikler sunar.
React: Komponent bazlı kullanıcı arayüzleri geliştirme.
Redux Toolkit & Redux Persist: Uygulama genelinde durum yönetimi ve durumun tarayıcıda kalıcı hale getirilmesi.
Axios & RTK Query: Veri çekme ve state yönetimi için kullanılan kütüphaneler, performans optimizasyonu ve daha temiz kod yapısı sağlar.

## Kurulum Talimatları

### Önkoşullar
Projeyi yerel ortamınızda çalıştırmadan önce, Node.js'in (v20.0 veya üzeri) yüklü olduğundan emin olun.

### Proje Kurulumu

#### Reposu Klonlayın:
```bash
git clone https://github.com/yarkinucerler/98e44e2f5a1c3eeda81e9734024a51d9.git
```

#### Proje Dizinine Geçin:

```bash
cd 98e44e2f5a1c3eeda81e9734024a51d9
```

#### Bağımlılıkları Yükleyin:
npm kullanıyorsanız:
```bash
npm install
```

veya yarn kullanıyorsanız:

```bash
yarn install
```

#### Geliştirme Sunucusunu Başlatın:
npm kullanıyorsanız:
```bash
npm dev
```

veya yarn kullanıyorsanız:

```bash
yarn dev
```

Uygulama varsayılan olarak localhost:3000 adresinde çalışacaktır.

### Çevre Değişkenleri (.env) ve API Endpoint Konfigürasyonu
Bu proje, API istekleri için bir temel URL kullanır. Projenin düzgün çalışabilmesi ve veri çekme işlemlerinin başarıyla gerçekleşebilmesi için, bu URL'in .env dosyasında tanımlanması gerekir. Bu sayede, uygulama genelinde tek bir noktadan API adresi yönetilebilir ve güvenlik veya konfigürasyon değişiklikleri kolayca yapılabilir.

### `.env` Dosyası Oluşturma
Proje dizininde, uygulamanın kök klasöründe bir .env dosyası oluşturun. Bu dosya, geliştirme ortamınıza özgü çevre değişkenlerini içerecek şekilde yapılandırılmalıdır.

### `NEXT_PUBLIC_BASE_URL` Değişkenini Tanımlama
Uygulamanın verileri almak için erişeceği API'nin temel URL'ini belirlemek üzere, .env.local dosyanıza aşağıdaki satırı ekleyin:

```dotenv
NEXT_PUBLIC_BASE_URL=https://api.example.com
```

## Katkıda Bulunma
Proje açık kaynaklıdır ve katkıda bulunmak isteyen herkesi memnuniyetle karşılar. İlginç fikirleriniz veya önerileriniz varsa, lütfen bir pull request oluşturun veya bir issue açın.