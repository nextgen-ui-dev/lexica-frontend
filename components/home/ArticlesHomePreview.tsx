import Image from "next/image";
import Container from "../core/layout/Container";

const ArticleHomePreviews = () => {
  return (
    <section className="w-full h-full bg-backdrop mt-12">
      <section className="w-full h-full bg-primary-600 rounded-t-[6dvh] py-12">
        <Container expanded>
          <div className="relative w-full h-full">
            <div className="flex flex-col justify-center items-center gap-12">
              <h2 className="text-white">Artikel terbaru</h2>
              <div className="w-full grid grid-cols-3 gap-4">
                <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 hover:-translate-y-4 transition duration-200 ease-in bg-white rounded-2xl">
                  <div className="relative w-full h-[20vh] md:h-[28vh] rounded-xl overflow-hidden">
                    <Image
                      src="/images/no_image.png"
                      alt=""
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="group-hover:scale-110 transition bg-primary-500"
                    />
                  </div>
                  <h4 className="line-clamp-2">Lorem Ipsum</h4>
                  <p className="line-clamp-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 hover:-translate-y-4 transition duration-200 ease-in bg-white rounded-2xl">
                  <div className="relative w-full h-[20vh] md:h-[28vh] rounded-xl overflow-hidden">
                    <Image
                      src="/images/no_image.png"
                      alt=""
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="group-hover:scale-110 transition bg-primary-500"
                    />
                  </div>
                  <h4 className="line-clamp-2">Lorem Ipsum</h4>
                  <p className="line-clamp-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="relative col-span-3 md:col-span-1 flex flex-col gap-2 w-full p-4 hover:-translate-y-4 transition duration-200 ease-in bg-white rounded-2xl">
                  <div className="relative w-full h-[20vh] md:h-[28vh] rounded-xl overflow-hidden">
                    <Image
                      src="/images/no_image.png"
                      alt=""
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="group-hover:scale-110 transition bg-primary-500"
                    />
                  </div>
                  <h4 className="line-clamp-2">Lorem Ipsum</h4>
                  <p className="line-clamp-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default ArticleHomePreviews;
