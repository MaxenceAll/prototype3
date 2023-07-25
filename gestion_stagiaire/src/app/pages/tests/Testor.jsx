import React, { useMemo, useState } from 'react'
import Modal from '../../components/lib/container/Modal'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from './../../components/lib/form/Button';
import InputSelect from './../../components/lib/form/InputSelect';
import Input from '../../components/lib/form/Input';
import Accordion from '../../components/lib/container/Accordion';
import Tabs, { TabPanel } from '../../components/lib/container/Tabs';

function Testor() {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (<>
        <div className="flex flex-wrap gap-5 m-5 justify-center">
            <div>
                primary lightest<div className='w-10 h-10 bg-primary-lightest border-2 border-black'></div>
                primary lighter<div className='w-10 h-10 bg-primary-lighter border-2 border-black'></div>
                primary light<div className='w-10 h-10 bg-primary-light border-2 border-black'></div>
                primary<div className='w-10 h-10 bg-primary border-2 border-black'></div>
                primary dark<div className='w-10 h-10 bg-primary-dark border-2 border-black'></div>
                primary darker<div className='w-10 h-10 bg-primary-darker border-2 border-black'></div>
                primary darkest<div className='w-10 h-10 bg-primary-darkest border-2 border-black'></div>
            </div>
            <div>
                secondary lightest<div className='w-10 h-10 bg-secondary-lightest border-2 border-black'></div>
                secondary lighter<div className='w-10 h-10 bg-secondary-lighter border-2 border-black'></div>
                secondary light<div className='w-10 h-10 bg-secondary-light border-2 border-black'></div>
                secondary<div className='w-10 h-10 bg-secondary border-2 border-black'></div>
                secondary dark<div className='w-10 h-10 bg-secondary-dark border-2 border-black'></div>
                secondary darker<div className='w-10 h-10 bg-secondary-darker border-2 border-black'></div>
                secondary darkest<div className='w-10 h-10 bg-secondary-darkest border-2 border-black'></div>
            </div>
            <div>
                background lightest<div className='w-10 h-10 bg-background-lightest border-2 border-black'></div>
                background lighter<div className='w-10 h-10 bg-background-lighter border-2 border-black'></div>
                background light<div className='w-10 h-10 bg-background-light border-2 border-black'></div>
                background<div className='w-10 h-10 bg-background border-2 border-black'></div>
                background dark<div className='w-10 h-10 bg-background-dark border-2 border-black'></div>
                background darker<div className='w-10 h-10 bg-background-darker border-2 border-black'></div>
                background darkest<div className='w-10 h-10 bg-background-darkest border-2 border-black'></div>
            </div>
            gray<div className='w-10 h-10 bg-gray border-2 border-black'></div>
        </div>

        <div>
            Test du modal:
            <button className='btn btn-secondary' onClick={openModal}>Tester le modal !</button>
            <Modal isOpen={modalOpen} close={closeModal} title="Modal de test">
                <p>Ici le contenu qu'on veut !.</p>
            </Modal>
        </div>

        <div>
            Test du formulaire :
            <TestForm />
        </div>


    </>
    )
}

export default Testor




const TestForm = () => {
    const people = useMemo(
        () =>
            [
                { id: 1, name: 'Durward Reynolds', unavailable: false },
                { id: 2, name: 'Kenton Towne', unavailable: false },
                { id: 3, name: 'Therese Wunsch', unavailable: false },
                { id: 4, name: 'Benedict Kessler', unavailable: true },
                { id: 5, name: 'Katelyn Rohan', unavailable: false },
                { id: 6, name: 'Vladimir Keeling', unavailable: false },
                { id: 7, name: 'Kariane Medhurst', unavailable: false },
                { id: 8, name: 'Nathanial Erdman', unavailable: false },
                { id: 9, name: 'Glenna Reichert', unavailable: false },
                { id: 10, name: 'Clementina DuBuque', unavailable: false },
            ].map((person) => ({
                value: person.id,
                label: person.name,
            })),
        [],
    );

    return (
        <div className="mb-5 border-b pb-5">
            <div className="w-full rounded-lg bg-white p-4 shadow dark:bg-gray-700">
                <Formik
                    initialValues={{ person: [], name: '' }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={Yup.object().shape({
                        person: Yup.array().required().min(2),
                        name: Yup.string().required().trim(),
                    })}
                >
                    <Form className="flex flex-col items-end space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
                        <Field
                            name="person"
                            component={InputSelect}
                            placeholder="Select a person..."
                            label="Manager:"
                            options={people}
                            multiple
                        />
                        <Field
                            name="name"
                            component={Input}
                            placeholder="Name"
                            label="Name:"
                            type="text"
                        />
                        <Button
                            color="pink"
                            type="submit"
                            className="my-2 w-full sm:my-0 sm:w-min"
                        >
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
