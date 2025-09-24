import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Men <span className="text-primary"> Haqimda</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Ehtirosli veb-dasturchi va texnologiya yaratuvchisi
            </h3>

            <p className="text-muted-foreground">
              Veb-ishlab chiqish bo'yicha 5 yildan ortiq tajribam bilan men ixtisoslashganman
              sezgir, qulay va samarali veb yaratishda
              zamonaviy texnologiyalardan foydalangan holda ilovalar.
            </p>

            <p className="text-muted-foreground">
              Men murakkablik uchun oqlangan echimlarni yaratishga ishtiyoqmandman
              muammolar, va men doimo yangi texnologiyalarni o'rganyapman va
              doimo rivojlanib borayotgan tarmoqning oldingi saflarida qolish uchun texnikalar
              manzara.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Aloqa qiling
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                CV yuklab olish
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Veb-ishlab chiqish</h4>
                  <p className="text-muted-foreground">
                    Bilan sezgir veb-saytlar va veb-ilovalarni yaratish
                    zamonaviy ramkalar.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Intuitiv foydalanuvchi interfeyslarini va uzluksiz foydalanuvchini loyihalash
                    tajribalar.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Loyihalar boshqaruvi</h4>
                  <p className="text-muted-foreground">
                    Agile bilan kontseptsiyadan to yakuniga qadar etakchi loyihalar
                    metodologiyalari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
