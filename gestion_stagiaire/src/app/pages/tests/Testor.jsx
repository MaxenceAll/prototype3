import React, { useEffect, useMemo, useState } from 'react'
import Modal from '../../components/lib/container/Modal'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from './../../components/lib/form/Button';
import InputSelect from './../../components/lib/form/InputSelect';
import Input from '../../components/lib/form/Input';
import TablePanel from './../../components/lib/container/table/TablePanel';


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
        <div>
            Test de liste :
            <TestList />
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


const TestList = () => {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [search, setSearch] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        const back = fetchData(page, sort, search);
        setTotalElements(back.page.totalElements);
        setTotalPages(back.page.totalPages);
        setPeople(
            back.users.map((d) => {
                return {
                    name: <Name person={d} />,
                    title: <Title person={d} />,
                    status: <Active isActive={d.isActive} />,
                    role: d.role,
                    edit: <EditBtn />,
                };
            }),
        );
    }, [page, search, sort]);

    return (
        <div className="my-5 border-y py-5">
            <TablePanel
                column={[
                    { name: 'name', label: 'Name', sortable: true },
                    { name: 'title', label: 'Title' },
                    { name: 'status', label: 'Status', sortable: true },
                    { name: 'authorities', label: 'Role' },
                    { name: '', label: '' },
                ]}
                rows={people}
                onSearch={(values) => {
                    setSearch(values.search);
                    setPage(0);
                }}
                onSort={(values) => {
                    setSort(values);
                    setPage(0);
                }}
                totalElements={totalElements}
                pageSize={2}
                totalPages={totalPages}
                onPageChange={setPage}
                currentPage={page}
                setCurrentPage={setPage}
            />
        </div>
    );
};

const EditBtn = () => {
    return (
        <button type="button" className="btn-link-primary">
            Edit
        </button>
    );
};

const Name = ({ person }) => {
    return (
        <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {person.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {person.email}
                </div>
            </div>
        </div>
    );
};

const Title = ({ person }) => {
    return (
        <>
            <div className="text-sm text-gray-900 dark:text-gray-100">{person.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
                {person.department}
            </div>
        </>
    );
};

const Active = ({ isActive }) => {
    return (
        <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 
			${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
            {isActive ? 'Active' : 'Inactive'}
        </span>
    );
};

// FAKE DATA: only here for the exemple

function fetchData(page, sort, search) {
    let users = dataBackEnd.users;

    if (search) {
        const searchLower = search.toLowerCase();
        users = users.filter((u) => {
            return (
                u.name.toLowerCase().includes(searchLower) ||
                u.email.toLowerCase().includes(searchLower)
            );
        });
    }

    if (sort) {
        const { name, direction } = sort;
        users = users.sort((a, b) => {
            if (a[name] < b[name]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[name] > b[name]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    const pageDef = {
        totalElements: users.length,
        totalPages: Math.ceil(users.length / 2),
    };

    switch (page) {
        case 1:
            users = users.slice(2, 4);
            break;
        default:
            users = users.slice(0, 2);
            break;
    }

    return { users, page: pageDef };
}

const dataBackEnd = {
    page: {
        totalElements: 4,
        pageSize: 2,
        totalPages: 2,
    },
    users: [
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm',
            department: 'Optimization',
            role: 'Admin',
            isActive: false,
            email: 'jane.cooper@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            name: 'John Doe',
            title: 'Happy Manager',
            department: 'Manager',
            role: 'Manager',
            isActive: true,
            email: 'john.doe@example.com',
            edit: 'editBtn',
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            name: 'Henry Dursel',
            title: 'Manager',
            department: 'Management',
            role: 'Manager',
            isActive: true,
            email: 'henry.dursel@example.com',
            edit: 'editBtn',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            name: 'Jack Koon',
            title: 'CEO',
            department: 'Human Resources',
            role: 'Director',
            isActive: false,
            email: 'jack.koon@example.com',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
    ],
};
