import "../scss/style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const myTabs = () => {
  return (
    <div className="tabs" id="tabs">
    <Tabs>
      <div className="container tabs__container">
        <TabList>
          <ul className="tabs__links">
            <Tab>
              <li className="tabs__links-item">Consistent</li>
            </Tab>
            <Tab>
              <li className="tabs__links-item">Customer oriented</li>
            </Tab>
            <Tab>
              <li className="tabs__links-item">Innovative</li>
            </Tab>
            <Tab>
              <li className="tabs__links-item">Business oriented</li>
            </Tab>
          </ul>
        </TabList>

        <ul className="tabs__content">
          <TabPanel>
            <li className="tabs__content-item">
              <h2 className="tabs__content-title">1. Consistent</h2>
              <p className="tabs__content-description">
                Consolidating many years of experience and practice, the
                company's lawyers accompany complex projects and achieve a
                number of important decisions for the industry. Many of them
                form the practice of applying the law of the sea in Ukraine.
              </p>
            </li>
          </TabPanel>

          <TabPanel>
            <li className="tabs__content-item">
              <h2 className="tabs__content-title">2. Customer oriented</h2>
              <p className="tabs__content-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia exercitationem itaque nihil reiciendis consequatur,
                culpa hic saepe accusamus dolore. Veritatis quod recusandae in,
                architecto quidem accusantium nisi impedit consectetur accusamus
                vel sunt quo, eum natus sint et illum quos est pariatur ratione
                blanditiis, at molestias
              </p>
            </li>
          </TabPanel>

          <TabPanel>
            <li className="tabs__content-item">
              <h2 className="tabs__content-title">3. Innovative</h2>
              <p className="tabs__content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ad soluta repudiandae harum doloremque eum placeat
                quasi, blanditiis dignissimos? Harum iure vel, nostrum molestiae
                quia quod ipsa non labore voluptate impedit, eum omnis quis
                veniam repellendus qui dignissimos distinctio dolore ipsum enim
                perspiciatis. Saepe ea magnam
              </p>
            </li>
          </TabPanel>

          <TabPanel>
            <li className="tabs__content-item">
              <h2 className="tabs__content-title">4. Business oriented</h2>
              <p className="tabs__content-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis enim omnis soluta exercitationem saepe. Amet
                accusamus recusandae nisi architecto. Reprehenderit nisi est
                earum quis vero harum quas dicta error qui quisquam modi
                voluptas veritatis ea vel a ducimus delectus eum quam accusamus
                velit, officia exercitationem? Qui
              </p>
            </li>
          </TabPanel>
        </ul>
      </div>
    </Tabs>
  </div>
  );
};

export default myTabs;
