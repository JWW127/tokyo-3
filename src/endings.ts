import { rl } from ".";
import { Argv } from "./types";
import { unit03 } from "./unit-03";
import { mari } from "./mari-the-beast";
import { shinji } from "./shinji";
import { rei } from "./rei";
import { pen } from "./pen";
import { dss } from "./dss";
import { gendo } from "./gendo";
import { nerv } from "./nerv";
import { seele } from "./seele";
import { notify } from "node-notifier";
import { kaworu } from "./kaworu";
import { asuka } from "./asuka";

export const endingAnimationCall = (argv: Argv) => {

    function empty() {
        rl.write("\u001B[?25h");
        console.clear();
        notify("🚨TIME🚨");
        process.exit();
    }

    let lookup = {
        beast: () => mari(),
        angel: () => unit03(),
        shinji: () => shinji(),
        rei: () => rei(),
        pen: () => pen(),
        nerv: () => nerv(),
        gendo: () => gendo(),
        dss: () => dss(),
        asuka: () => asuka(),
        red: () => unit03(),
        seele: () => seele(),
        kaworu: () => kaworu(),
        empty: () => empty()
    } as const

    type obj = typeof lookup
    type keys = keyof obj
    type anime = obj[keyof obj]

    // have to jpjs or we get unexpected token error
    let k: keys = argv.c ? argv.c : JSON.parse(JSON.stringify("empty"));

    let animation: anime = lookup[k]
    return animation()


};
