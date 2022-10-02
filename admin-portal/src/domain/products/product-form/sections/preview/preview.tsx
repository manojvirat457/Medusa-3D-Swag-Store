import React from "react"
import BodyCard from "../../../../../components/organisms/body-card"
import Previewer from "./previewer"
import Input from "../../../../../components/molecules/input"
import { useProductForm } from "../../form/product-form-context"
import RadioGroup from "../../../../../components/organisms/radio-group"
import Button from "../../../../../components/fundamentals/button"
import FileUploadField from "../../../../../components/atoms/file-upload-field"
import Medusa from "../../../../../services/api"
import useNotification from "../../../../../hooks/use-notification"
import { getErrorMessage } from "../../../../../utils/error-messages"
import View from '../../../../../components/fundamentals/icons/eye-icon'
import Modal from "../../../../../components/molecules/modal"

enum ResourceFileType {
    Online = "online",
    Local = "local"
}



const columns = [
    {
        Header: "Image",
        accessor: "image",
        Cell: ({ cell }) => {
            return (
                <div className="py-base large:w-[176px] xsmall:w-[80px]">
                    <img
                        className="h-[80px] w-[80px] object-cover rounded"
                        src={cell.row.original.url}
                    />
                </div>
            )
        },
    },
    {
        Header: "File Name",
        accessor: "name",
        Cell: ({ cell }) => {
            return (
                <div className="large:w-[700px] medium:w-[400px] small:w-auto">
                    <p className="inter-small-regular">{cell.row.original?.name}</p>
                    <span className="inter-small-regular text-grey-50">
                        {typeof cell.row.original.size === "number"
                            ? `${(cell.row.original.size / 1024).toFixed(2)} KB`
                            : cell.row.original?.size}
                    </span>
                </div>
            )
        },
    },
    {
        Header: <div className="text-center">Thumbnail</div>,
        accessor: "thumbnail",
        Cell: ({ cell }) => {
            return (
                <div className="flex justify-center">
                    <RadioGroup.SimpleItem
                        className="justify-center"
                        value={cell.row.index}
                    />
                </div>
            )
        },
    },
]

const Preview = ({ product }) => {

    const [selectedType, setSelectedType] = React.useState<string>(ResourceFileType.Online)
    const [submitting, setSubmitting] = React.useState(false)
    const [previewUrl, setPreview] = React.useState<any[]>()
    const [expanded, setExpandedView] = React.useState(false)
    const notification = useNotification()

    const { setPreviewUrl, register } = useProductForm()

    React.useEffect(() => {
        if (product != null) {
            if (product.metadata?.previewUrl != null || undefined) setPreview(product.metadata.previewUrl)
        }
    }, [])

    const handleTypeChange = (t) => {
        if (t !== selectedType) {
            setSelectedType(t)
        }
    }

    const addImage = (image: any) => {
        onSubmit(image)

    }

    // const saveProductMetadata = async () => {

    //     let newProduct = { metadata: { previewUrl: previewUrl } }

    //     console.log(newProduct);


    //     try {
    //         let savedProduct = await Medusa.products.update(product.id, newProduct)

    //         notification("Success", "Preview file saved !", "success")

    //     } catch (error) {
    //         notification("Error", getErrorMessage(error), "error");
    //     }
    // }

    const onSubmit = async (image) => {
        setSubmitting(true)
        let images = [];
        images.push(image.nativeFile)

        let uploadedImgs: any[] = await Medusa.uploads
            .create(images)
            .then(({ data }) => {
                const uploaded = data.uploads.map(({ url }) => url)
                notification("Success", "File Uploaded !", "success")
                handleTypeChange(ResourceFileType.Online)
                return uploaded
            })
            .catch((err) => {
                setSubmitting(false)
                notification("Error uploading images", getErrorMessage(err), "error")
                return
            })

        if (uploadedImgs.length > 0) {
            setPreviewUrl(uploadedImgs[0])
            setPreview(uploadedImgs[0])
        }

    }

    const urlChanged = (e) => {
        setPreviewUrl(e.target.value)
        setPreview(e.target.value)
    }

    const expandedView = (value) => {
        setExpandedView(value)
    }

    return (

        <BodyCard title="3d Preview" subtitle="">

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-large">
                <div>
                    <Previewer {...{ previewUrl }} />
                    <div className="gap-4 flex items-center justify-end ">
                        <View size={30} onClick={() => { expandedView(true) }} />
                    </div>
                </div>
                <div >
                    <div className="inter-base-semibold mb-large">Resource Upload</div>
                    <RadioGroup.Root
                        className="flex gap-base"
                        value={selectedType}
                        onValueChange={handleTypeChange}
                    >
                        <RadioGroup.Item
                            className="flex-1"
                            label={"Online URL"}
                            description={"Enter the resource's online url"}
                            value={ResourceFileType.Online}
                        />
                        <RadioGroup.Item
                            className="flex-1"
                            label={"Local Resource file"}
                            description={"Select Local file from your computer"}
                            value={ResourceFileType.Local}
                        />

                    </RadioGroup.Root>
                    {
                        selectedType == ResourceFileType.Online &&
                        <div className="mt-1xlarge">
                            <Input
                                ref={register}
                                label="Resource Link"
                                name="link"
                                placeholder="https:// ..... ...."
                                value={previewUrl}
                                onChange={urlChanged}
                            />
                        </div>
                    }

                    {
                        selectedType == ResourceFileType.Local &&
                        <div>
                            <div className="mt-1xlarge">
                                <FileUploadField
                                    onFileChosen={(files) => {
                                        const file = files[0]
                                        const url = URL.createObjectURL(file)
                                        addImage({
                                            url,
                                            name: file.name,
                                            size: file.size,
                                            nativeFile: file,
                                        })
                                    }}
                                    placeholder="gltf, glb file format is recommended, up to 10MB each"
                                    filetypes={["gltf"]}
                                    className="py-large"
                                />

                            </div>
                        </div>
                    }


                    <div className="m-5 gap-4 flex items-center justify-end ">
                        <Button
                            type="button"
                            onClick={() => { }}
                            variant="ghost"
                            size="small"
                            className="w-eventButton justify-center"
                        >
                            Remove
                        </Button>
                        {/* <Button
                            type="button"
                            variant="primary"
                            size="small"
                            onClick={saveProductMetadata}
                            className="w-eventButton justify-center"
                        >
                            Save
                        </Button> */}
                    </div>
                </div>


            </div>
            <Modal open={expanded} handleClose={() => { expandedView(false) }}>
                <Modal.Body>
                    <Modal.Header handleClose={() => { expandedView(false) }}>
                        <span className="inter-xlarge-semibold">FullView</span>
                    </Modal.Header>
                    <Modal.Content>
                        <Previewer {...{ previewUrl }} isFullView={true} />
                    </Modal.Content>

                </Modal.Body>
            </Modal>
        </BodyCard>
    )
}


export default Preview
