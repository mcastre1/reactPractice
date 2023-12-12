import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/NavBar";
import { ThreeLinkContent } from "./components/ThreeLinkContent";
import { VideoDesc } from "./components/VideoDesc";
import { IconDesc } from "./components/IconDesc";
import { ButtonsDesc } from "./components/ButtonsDesc";

function App() {
  return (
    <>
      <div className="vh-15">
        <NavBar></NavBar>
      </div>
      <div className="vh-85">
        <div className="container-fluid w-100 h-40">
          <div className="row">
            <div className="col-sm m-4 border rounded bg-light">
              <IconDesc desc="Collaborate, call, and set online customer meetings with Microsoft Teams"></IconDesc>
            </div>
            <div className="col-sm m-4 border rounded bg-light">
              <ThreeLinkContent
                header="Learn about Licensing"
                first_url="#"
                first_desc="Power Apps"
                second_url="#"
                second_desc="Power Automate"
                third_url="#"
                third_desc="Sales Hub"
              ></ThreeLinkContent>
            </div>
            <div className="col-sm m-4 border rounded bg-light">
              <ButtonsDesc></ButtonsDesc>
            </div>
          </div>
        </div>
        <div className="container-fluid w-100 h-60">
          <div className="row row-eq-height">
            <div className="col-sm">
              <div className="h-50" style={{ paddingBottom: 5 }}>
                <div
                  className="border rounded bg-light h-100"
                  style={{ marginBottom: 10 }}
                >
                  <ThreeLinkContent
                    header="Learn about Dynamics 365 Sales"
                    first_url="mailto: abc@example.com?subject = Feedback&body = Message"
                    first_desc="Get Started with Sales"
                    second_url="#"
                    second_desc="Set up your business process"
                    third_url="#"
                    third_desc="Customize with Power Apps"
                  ></ThreeLinkContent>
                </div>
              </div>
              <div className="h-50" style={{ paddingTop: 5 }}>
                <div className=" border rounded bg-light h-100">
                  <ThreeLinkContent
                    header="Learn about Power Apps"
                    first_url="#"
                    first_desc="Model Driven Apps"
                    second_url="#"
                    second_desc="Canvas Apps"
                    third_url="#"
                    third_desc="Dataverse"
                  ></ThreeLinkContent>
                </div>
              </div>
            </div>
            <div className="col-sm border rounded bg-light h-100">
              <VideoDesc
                header="Learn about JourneyTeam"
                desc=""
                url="https://www.youtube.com/embed/SqcY0GlETPk?si=hZ0gXGWJ5RiMUoKn"
              ></VideoDesc>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
