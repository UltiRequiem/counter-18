import {useInterval} from "usehooks-ts";
import {useState} from "react";

const my18bday = new Date(2024, 9, 13).getTime()

export function timeLeft() {
        const now = new Date();

        const remainingTime = my18bday - now.getTime();

        const seconds = Math.floor((remainingTime / 1000) % 60);
        const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

        return {days, hours, minutes, seconds};
}

const im18 = false

export default function Home() {

        const [time, setTimer] = useState(timeLeft());

        useInterval(() => {
                setTimer(timeLeft());
        }, 1000);


        return (
                <div className="h-screen flex flex-col bg-cyan-300 text-center">

                        <h1 className="bg-slate-600 text-7xl p-5">18? {im18 ? "Yeah!" : "Nope."}</h1>

                        <div className="object-fill flex-1 flex items-center justify-center">

                                <section>
                                        <p className="text-6xl md:text-8xl">{time.days} Days</p>
                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                        <p className="text-3xl">
                                                {time.hours}:{time.minutes}:{time.seconds}
                                        </p>

                                        <p className="p-3">Para que tengas seas mayor de edad.</p>
                                </section>



                        </div>

                        <p className="text-2xl p-4 bg-slate-400">Eliaz Bobadilla</p>
                </div >
        )
}
