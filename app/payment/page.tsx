import React from "react";

const AboutPage = () => {
  const breadcrumb = [
    { label: "Главная", link: "/" },
    { label: "Продукты", link: "/product" },
    { label: "Оплата и Доставка", link: "/payment" },
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <nav className="mb-4 text-sm text-gray-600 flex items-center">
        {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.link} className="hover:text-gray-800">
              {item.label}
            </a>
            {index < breadcrumb.length - 1 && (
              <span className="mx-2">{">"}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="flex flex-col lg:flex-row gap-4">
        <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4">
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-yellow-500 hover:text-yellow-600"
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="#payment-delivery"
                className="text-gray-800 hover:text-gray-900"
              >
                Оплата и Доставка
              </a>
            </li>
          </ul>
          <div className="mt-4 p-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Оплата и Доставка</h3>
            <p className="text-sm text-gray-700 mb-2">
              Мы предлагаем различные методы оплаты для вашего удобства:
              <ul className="list-disc list-inside">
                <li>Наличные</li>
                <li>Банковские карты</li>
                <li>Онлайн платежи</li>
              </ul>
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Доставка осуществляется в течение 2-3 рабочих дней после
              подтверждения заказа. Вы можете выбрать удобное время и место
              доставки.
            </p>
            <a
              href="#learn-more"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Узнать больше
            </a>
          </div>
        </aside>

        <main className="bg-white p-8 rounded-lg shadow-md w-full lg:w-3/4">
          <h1 className="text-2xl font-bold mb-4">7 SPORT MARKET</h1>
          <p className="mb-4">
            В составе томатов в большом количестве содержатся сахар, клетчатка,
            пектины, бета-каротин, витамины B1, B2, B5, B6, B9, C, K, H и PP, а
            также нужные организму человека.
          </p>
          <p className="mb-4">
            Овощи содержат в себе много полезных витаминов, которые укрепляют
            здоровье и иммунитет и являются необходимым компонентом в рационе
            человека. Тепличный помидор - всегда доступен для вас и в сети
            супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
            заказать их с доставкой в Ташкенте.
          </p>
          <p className="mb-4">
            В составе томатов в большом количестве содержатся сахар, клетчатка,
            пектины, бета-каротин, витамины B1, B2, B5, B6, B9, C, K, H и PP, а
            также нужные организму человека.
          </p>
          <p className="mb-4">
            Овощи содержат в себе много полезных витаминов, которые укрепляют
            здоровье и иммунитет и являются необходимым компонентом в рационе
            человека. Тепличный помидор - всегда доступен для вас и в сети
            супермаркетов “Makro” вы всегда можете найти его по выгодной цене и
            заказать их с доставкой в Ташкенте.
          </p>
          <div className="flex justify-between items-center mt-8">
            <button className="text-yellow-500 hover:text-yellow-600">
              Поделиться
            </button>
            <button className="text-gray-500 hover:text-gray-600">
              Распечатать
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
