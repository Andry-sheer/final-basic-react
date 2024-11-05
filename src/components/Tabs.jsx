import "../scss/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const myTabs = () => {
  return (
    <div className="tabs" id="tabs">
    <Tabs className="container tabs__container">

        <TabList className="tabs__links">
            <Tab className="tabs__links-item">Consistent</Tab>
              
            <Tab className="tabs__links-item">Customer oriented</Tab>
              
            <Tab className="tabs__links-item">Innovative</Tab>

            <Tab className="tabs__links-item">Business oriented</Tab>
        </TabList>

        <div className="tabs__content">
          <TabPanel className="tabs__content-item">
              <h2 className="tabs__content-title">1. Consistent</h2>
              <p className="tabs__content-description">
                Consolidating many years of experience and practice, the
                company's lawyers accompany complex projects and achieve a
                number of important decisions for the industry. Many of them
                form the practice of applying the law of the sea in Ukraine.
              </p>
          </TabPanel>

          <TabPanel className="tabs__content-item">
              <h2 className="tabs__content-title">2. Customer oriented</h2>
              <p className="tabs__content-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia exercitationem itaque nihil reiciendis consequatur,
                culpa hic saepe accusamus dolore. Veritatis quod recusandae in,
                architecto quidem accusantium nisi impedit consectetur accusamus
                vel sunt quo, eum natus sint et illum quos est pariatur ratione
                blanditiis, at molestias
              </p>
          </TabPanel>

          <TabPanel className="tabs__content-item">
              <h2 className="tabs__content-title">3. Innovative</h2>
              <p className="tabs__content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ad soluta repudiandae harum doloremque eum placeat
                quasi, blanditiis dignissimos? Harum iure vel, nostrum molestiae
                quia quod ipsa non labore voluptate impedit, eum omnis quis
                veniam repellendus qui dignissimos distinctio dolore ipsum enim
                perspiciatis. Saepe ea magnam
              </p>
          </TabPanel>

          <TabPanel className="tabs__content-item">
              <h2 className="tabs__content-title">4. Business oriented</h2>
              <p className="tabs__content-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis enim omnis soluta exercitationem saepe. Amet
                accusamus recusandae nisi architecto. Reprehenderit nisi est
                earum quis vero harum quas dicta error qui quisquam modi
                voluptas veritatis ea vel a ducimus delectus eum quam accusamus
                velit, officia exercitationem? Qui
              </p>
          </TabPanel>
        </div>
    </Tabs>
  </div>
  );
};

export default myTabs;
