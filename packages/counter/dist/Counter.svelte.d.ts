import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CounterProps = typeof __propDef.props;
export type CounterEvents = typeof __propDef.events;
export type CounterSlots = typeof __propDef.slots;
export default class Counter extends SvelteComponent<CounterProps, CounterEvents, CounterSlots> {
}
export {};
