import axios from 'axios';
import api from "@/plugins/axios";
import router from '@/router';
import Cookies from 'js-cookie'

export default {
    state: {
        all_company: [] as any [],
        choose_company: undefined as number | undefined,
        one_company: {} as any,
        validInn: false as boolean,

        // companyInfo
        visibleChangeCompany: false,
    },
    mutations: {
    },
    actions: {
        getCompanies({
            commit, state
        }:any) {
          api.get('marketplace/company_for_staff/')
          .then((response:any)=>{
              if(response.status === 200) {
                state.all_company = response.data.results
              }
          })
        },
        chooseCompany({
            commit, state
        }:any, payload:any) {
            let company = state.all_company.filter((elem:any)=> elem.id === payload)
            if(company[0].approved == true) {
                state.choose_company = payload;
            }
            else {
                alert("данная компания ещё проходит этап подтверждения")
            }
            // router.push(`/?company_id=${payload}`)
        },
        getOneCompany({
            commit, state
        }:any, payload: any) {
            // проверить на наличие возможности поменять url адресс и получить не свою компанию
            if(state.choose_company == undefined) {
                let urlParams = new URLSearchParams(window.location.search);
                state.choose_company = Number(router.currentRoute.value.params.id);
            }
            api.get(`marketplace/company/${state.choose_company}/`).then((response:any)=>{
                state.one_company = response.data
            })
        },
        createCompany({
                 commit, state
        }:any, payload:any){
            // 352605176243
            console.log(payload);
            api.post('marketplace/company_for_staff/', payload.formData).then((response:any)=>{
                console.log(response.data);
                state.all_company = [...state.all_company, response.data];
            }).then(()=>{
                payload.changeIsVisibleModalAddCompany(false)
            })
        },
        checkInn({
            commit, state
            }:any, payload:any){
            axios.post(`https://htmlweb.ru/json/validator/inn/${payload}`).then((response:any)=>{
                if(response.data.status == 200) {
                    state.validInn = true;
                }
                else{ state.validInn = false }
            })
        },
        deleteCompany({
            commit, state
        }:any, payload:any){
            const isConfirm = confirm('вы уверены что хотите удалить компанию?')
            if(isConfirm){
                api.delete(`marketplace/company_for_staff/${payload}/`).then((response:any)=>{
                state.all_company = state.all_company.filter((elem:any)=> elem.id !== payload)
                })
            }
        },
        ChangeCompanyVisible({
            commit, state
        }:any, payload:any){
            state.visibleChangeCompany = !state.visibleChangeCompany;
        },
        changeCompany({
            commit, state
        }:any, payload:any){
            // console.log(...payload);
            const isConfirm = confirm("компания будет отправлена на перепроверку изменённых данных менеджером")
            if(isConfirm){
                api.put(`marketplace/company_for_staff/${state.choose_company}/`, payload ).then((response:any)=>{
                    console.log(response);
                })
            }
        }        
        // test function and check
    },
    modules: {
    },
    namespaced: true,
  }
  