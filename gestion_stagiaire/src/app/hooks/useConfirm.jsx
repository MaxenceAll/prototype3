import { createContext, useCallback, useContext, useRef, useState } from 'react';

import Modal from '../components/lib/container/Modal';

const ConfirmDialog = createContext();

/**
 * ConfirmDialogProvider component: provider for the confirm dialog,
 * to put in the root of the application so the useConfirm can be used everywhere
 *
 * @param {node} children: children of the component
 * 
 * @example
 *  <ConfirmDialogProvider>
        <BrowserRouter>
            <div className="cursor-default overflow-hidden bg-gray-50">
                <Routes />
            </div>
        </BrowserRouter>
    </ConfirmDialogProvider>
 * @author Peter Mollet
 */
export function ConfirmDialogProvider({ children }) {
    const [state, setState] = useState({ isOpen: false });
    const fn = useRef();

    const confirm = useCallback(
        (data) => {
            return new Promise((resolve) => {
                setState({ ...data, isOpen: true });
                fn.current = (choice) => {
                    resolve(choice);
                    setState({ isOpen: false });
                };
            });
        },
        [state],
    );

    return (
        <ConfirmDialog.Provider value={confirm}>
            {children}
            <Modal
                isOpen={state.isOpen}
                close={() => fn.current(false)}
                title={state.title}
            >
                <div className="rounded-md bg-transparent">
                    <div className="mt-2 bg-transparent">
                        <p className="bg-transparent text-sm leading-5 text-gray-500 dark:text-gray-300">
                            {state.description}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-end bg-transparent">
                        <span className="ml-3 inline-flex rounded-md shadow-sm">
                            <button
                                type="button"
                                className="btn btn-green"
                                onClick={() => fn.current(true)}
                            >
                                Ok
                            </button>
                        </span>
                        <span className="ml-3 inline-flex rounded-md shadow-sm">
                            <button
                                type="button"
                                className="btn btn-red"
                                onClick={() => fn.current(false)}
                            >
                                Cancel
                            </button>
                        </span>
                    </div>
                </div>
            </Modal>
        </ConfirmDialog.Provider>
    );
}

/**
 * useConfirm hook: hook to use the confirm dialog
 *
 * @example
 * const confirm = useConfirm();
 * confirm({
 *     title: 'Delete all ?',
 *    description: 'Are you sure you want to delete everything?',
 * });
 *
 * @author Peter Mollet
 */
export default function useConfirm() {
    return useContext(ConfirmDialog);
}
