type PropTypes = {
    enabled: boolean;
    action?: () => unknown;
}

export default function SwitchButton({ enabled, action }: PropTypes) {
    return (
        <button
            onClick={action ? () => action : undefined}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border ${enabled ? 'bg-primary border-primary' : 'bg-zinc-300 border-natural/15'
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
            />
        </button>
    )
}