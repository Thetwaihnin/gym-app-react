import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Consequatur placeat numquam dolore, delectus rerum ratione a
                    lias harum, amet unde autem culpa ullam cum expedita officiis? Cupiditate magni veniam cum nihil.
                </p>
                <p>Evogym All Right Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem ipsum dolor sit amet.</p>
                <p className="my-5">consectetur adipisicing elit. Obcaecati, fugiat!</p>
                <p className="my-5">Lorem, ipsum dolor.</p>
                <p className="my-5"> minima necessitatibus, dolorum nostrum!</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet.</p>
                <p className="my-5">{333}-64378990</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer